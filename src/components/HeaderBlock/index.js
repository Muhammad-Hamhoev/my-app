import style from './style.module.css';

const HeaderBlock = () =>{
	return(
		<div>
			<div>
				<h1 className={style.header}>Hello React</h1>
				<p>Lorem, ipsum dolor sit amet.</p>
			</div>
		</div>
	);
}

export default HeaderBlock;