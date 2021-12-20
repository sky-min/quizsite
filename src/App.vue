<template>
  <div id="app">
    <div v-if="show">
      <p class="score"><strong>푼 문제수</strong>: {{count}}/{{all}} | <strong>정답 갯수</strong>: {{good}} | <strong>틀린 갯수</strong>: {{bad}}</p>
      <br />
      <br />
      <h3>{{qd}}</h3>
      <h2>{{question}}</h2>
      <img style="width: 50%;" v-bind:src="image" v-if="imgp" />
      <form v-on:submit="onSubmitForm">
        <input type="text" v-model="value">
        <button>제출</button>
      </form>
      <br />
      <p>{{result}}</p>
      <br />
      <p>{{resolve}}</p>
    </div>
    <div class="success" v-if="complete">
      <h1><strong class="counter">{{all}}</strong> 문제 중 <strong class="counter">{{good}}</strong> 문제를</h1>
      <h1>맞추셨습니다.</h1>
      <br />
      <button v-on:click="onHint">답 모두 보기</button>
    </div>
    <div class="hints" v-if="hintlist">
      <h1>정답</h1>
      <br />
      <ol>
        <li v-for="item in items">{{item}}</li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    let iif = true;
    if(this.$I[0] === ''){
      iif = false;
    }
    return {
      show: true,
      question: this.$Q[0][0],
      image: this.$I[0],
      imgp: iif,
      qd: this.$Q[0][1],
      count: 0,
      all: this.$Q.length,
      good: 0,
      bad: 0,
      value: '',
      result: '',
      resolve: '',
      resultScore: '',
      complete: false,
      hintlist: false,
      items: this.$H
    }
  },
  methods : {
    onSubmitForm(e){
      e.preventDefault();
      let count = this.count;
      if(this.$A[count].indexOf(this.value) > -1){
        this.result = '정답!';
        this.good++;
      }else{
        this.result = '틀렸습니다.';
        this.bad++;
        this.resolve = this.$H[count];
      }
      setTimeout(function(){
        this.result = '';
        this.resolve = '';
      }.bind(this), 1300);
      this.count++;
      this.value = '';
      if(this.count === this.all){
        this.qd = '';
        this.question = '결과 처리중 입니다.';
        this.imgp = false;
        setTimeout(function(){
          this.show = !this.show;
          this.complete = true;
        }.bind(this), 3500);
      }else{
        this.question = this.$Q[this.count][0];
        this.qd = this.$Q[this.count][1];
        let iif = true;
        if(this.$I[this.count] === ''){
          iif = false;
        }
        this.image = this.$I[this.count];
        this.imgp = iif;
      }
    },
    onHint(){
      this.complete = false;
      this.hintlist = true;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 2%;
}

.success {
  font-size: 40px;
  color: #ff8e8e;
  top: 50%;
  left: 50%;
}

.counter {
  color: #0fcfff;
}

.score {
	color: rgb(164,164,164);
  text-align: right;
}

.hints {
  text-align: left;
}

h1, h2 {
  font-weight: normal;
}

li {
  margin: 7px;
}
</style>