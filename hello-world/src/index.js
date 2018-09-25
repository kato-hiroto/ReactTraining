import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// （1）モジュールのインポート
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import RaisedButton from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';
//import injectTapEventPlugin from 'react-tap-event-plugin';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// （2）タッチイベントに必要なコード
//    http://stackoverflow.com/a/34015469/988941
//injectTapEventPlugin();

class MyButton extends React.Component {
	render() {
		return(
			<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
				<RaisedButton label="MyButton" />
			</MuiThemeProvider>
		);
	}
}

// カスタマイズしたい項目の設定
const muiTheme = getMuiTheme({
	palette: {
		primary1Color: blue[500],
	},
	RaisedButton: {
		width: 80,
	},
});
  
// PropsとしてmuiThemeオブジェクトを設定
const Main = () => (
	<MuiThemeProvider muiTheme={muiTheme}>
	  <RaisedButton label="My Button" />
	</MuiThemeProvider>
  );

const styles = {
	chip: {
		margin: 5,
	},
	wrapper: {
		display: 'flex',
		flexWrap: 'wrap',
	},
};

// （3）タップイベントのハンドラ
function handleTouchDelete() {
	alert('削除ボタンが押されました');
}

function handleTouchTap() {
	alert('チップが選択されました。');
}

// （4）Material-UIのコンポーネントの宣言
class MyChipSmaple extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
				<div style={styles.wrapper}>
					<Chip
						onRequestDelete={handleTouchDelete}
						onTouchTap={handleTouchTap}
						style={styles.chip} >
						<Avatar size={32}>TS</Avatar>
						Taro Sakurai
					</Chip>

					<Chip
						onRequestDelete={handleTouchDelete}
						onTouchTap={handleTouchTap}
						style={styles.chip} >
						<Avatar size={32}>JT</Avatar>
						Jiro Tanaka
					</Chip>

					<Chip
						onRequestDelete={handleTouchDelete}
						onTouchTap={handleTouchTap}
						style={styles.chip} >
						<Avatar size={32}>SB</Avatar>
						Saburo Suzuki
					</Chip>

					<Chip
						onRequestDelete={handleTouchDelete}
						onTouchTap={handleTouchTap}
						style={styles.chip} >
						<Avatar size={32}>SA</Avatar>
						Shiro Akasaka
					</Chip>

					<Chip
						onRequestDelete={handleTouchDelete}
						onTouchTap={handleTouchTap}
						style={styles.chip} >
						<Avatar size={32}>GN</Avatar>
						Goro Noda
					</Chip>
				</div>

			</MuiThemeProvider>
		);
	}
}

ReactDOM.render(
	<MyChipSmaple />,
	document.getElementById('root')
);

registerServiceWorker();
