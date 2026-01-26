import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
	return (
		<main className='container'>
			<ProfileCard />
		</main>
	);
}

function ProfileCard() {
	return (
		<section className='card'>
			<Avatar />
			<h1>Michael Goddard</h1>
			<MyInfo />
			<SkillList />
		</section>
	);
}

function Avatar() {
	return (
		<img
			className='avatar'
			src='./assets/img/avatar.jpg'
			alt='Temporary Avatar of me'
		/>
	);
}

function MyInfo() {
	return (
		<div className='data'>
			<p>
				I am a senior software engineer with 20yrs experience. I
				specialize in writing semantic markup, modern CSS/Sass and
				working on getting caught up on the latest in ReactJS Library.
			</p>
			<p>
				I am a subject matter expert in web accessibility development,
				testing and training. I have spent the last 20yrs learning how
				accessibility works, keeping up to date on the U.S. ADA Title II
				Laws and EAA Laws. I can provide web accessible code
				developement, testing and remediation using using the latest
				tools and code.
			</p>
		</div>
	);
}

function SkillList() {
	return (
		<ul className='skill-list'>
			<Skill bgColor='red' skill='Semantic HTML5' emoji='💪' />
			<Skill
				bgColor='lightcoral'
				skill='Modern & Responsive CSS'
				emoji='💪'
			/>
			<Skill bgColor='coral' skill='Bootstrap CSS Library' emoji='💪' />
			<Skill bgColor='indianred' skill='Sass' emoji='💪' />
			<Skill bgColor='yellow' skill='JavaScript' emoji='💪' />
			<Skill bgColor='cornsilk' skill='ReactJS' emoji='👶' />
			<Skill
				bgColor='blue'
				skill='Web Accessibility Development'
				emoji='💪'
			/>
			<Skill
				bgColor='cornflowerblue'
				skill='Web Accessibility Testing (VPAT/ARC)'
				emoji='💪'
			/>
			<Skill
				bgColor='dodgerblue'
				skill='Web Accessibility Training'
				emoji='💪'
			/>
			<Skill
				bgColor='lightskyblue'
				skill='Web Accessibility Remediation'
				emoji='💪'
			/>
		</ul>
	);
}

function Skill(props) {
	return (
		<li style={{ backgroundColor: props.bgColor }}>
			<span>{props.skill}</span>
			<span>{props.emoji}</span>
		</li>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
