import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/////////////////////////////////////////////
/////////////// RouletteApp /////////////////
/////////////////////////////////////////////

// Reactコンポーネントの宣言
class Roulette extends React.Component {
  constructor(props) { 
    super(props);
    this.state = { number: 1,
            isStart: false};
    this.toggleButton2 = this.toggleButton.bind(this);  // （1）
  }

  // state.numberを更新するメソッド
  shuffle(){
    var rand = Math.floor(Math.random() * 30) + 1;
    this.setState({number: rand});
  }

  // ルーレットを開始するメソッド
  startRoulette(){
    this.interval = setInterval(() => this.shuffle(), 50);
  }

  // ルーレットを停止するメソッド
  stopRoulette(){
    clearInterval(this.interval);
  }

  // ルーレット開始、または停止とイベントに合わせてボタンのラベルを切り替える
  toggleButton(){
    if(this.state.isStart){
      this.stopRoulette();
    } else {
      this.startRoulette();
    }

    this.setState((prevState) => ({
        isStart : !prevState.isStart
    }));
  }

  // buttonのonClickイベントにtoggleButtonをバインド
  // Reactコンポーネントを返す
  render() {
    return (
      <div>
        <p>number : {this.state.number}</p>
        <button onClick={this.toggleButton2}>
          {this.state.isStart ? 'Stop' : 'Start'}
        </button>
      </div>
    );
  }
}

// DomにReact要素を挿入
ReactDOM.render(
  <Roulette />,
  document.getElementById('root')
)

/////////////////////////////////////////////
///////////////  TimerApp  //////////////////
/////////////////////////////////////////////

// // Reactコンポーネントクラス「Timer」を宣言
// class Timer extends React.Component {
// 	constructor(props) {                                    // （4）
// 		super(props);
// 		this.state = {remaining : this.props.seconds};      // （2）
// 	}

// 	// state.remainingが正の数なら1秒減じる関数
// 	countDown() {
// 		if(this.state.remaining > 0) {
// 				this.setState((prevState) => ({
// 					remaining : prevState.remaining - 1       // （3）
// 			}));
// 		 }
// 	}

// 	// 初期化時に、countDownメソッドを1秒ごとに呼び出すタイマーを設定
// 	componentDidMount() {                                     // （5）
// 		this.interval = setInterval(() => this.countDown(), 1000);
// 	}

// 	// 終了処理として、タイマーをクリアする
// 	componentWillUnmount() {                                  // （6）
// 		clearInterval(this.interval);
// 	}

// 	// Timerコンポーネントが描画する要素を記述
// 	render() {
// 		return (
// 			<div>
// 				<h1>Hello, {this.props.name}!</h1>
// 				<h2>{this.state.remaining} seconds remaining.</h2>
// 			</div>
// 		);
// 	}
// }

// // Propsを通してnameとsecondsを渡して、Timerコンポーネントを生成
// const element = <Timer name="Filange" seconds={180} />;       // （1）

// // index.htmlのid=‘root’をもつ要素にelementを挿入
// ReactDOM.render(
// 	element,
// 	document.getElementById('root')
// );

registerServiceWorker();
