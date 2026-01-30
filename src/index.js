import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Create skills object
const skillsData = [
	{
		skill: 'HTML',
		level: 'Advanced',
		bgColor: '#BCE7FD',
		fgColor: '#000',
	},
	{
		skill: 'CSS/Sass',
		level: 'Advanced',
		bgColor: '#9CDCFC',
		fgColor: '#000',
	},
	{
		skill: 'JavaScript',
		level: 'Proficient',
		bgColor: '#AF3B6E',
		fgColor: '#fff',
	},
	{
		skill: 'ReactJS',
		level: 'Beginner',
		bgColor: '#6B2443',
		fgColor: '#fff',
	},
	{
		skill: 'Git/GitHub',
		level: 'Proficient',
		bgColor: '#FF781F',
		fgColor: '#fff',
	},
	{
		skill: 'Web Accessibility',
		level: 'Advanced',
		bgColor: '#F3D37C',
		fgColor: '#000',
	},
];
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
	const skills = skillsData;
	return (
		<ul className='skill-list'>
			{skills.map(
				(
					mySkills, //! Remember .map() loops through an object and adds key/value pair to a new object/array
				) => (
					<Skill skillObj={mySkills} key={mySkills.skill} />
				),
			)}
		</ul>
	);
}

function Skill({ skillObj }) {
	return (
		<li style={{ backgroundColor: skillObj.bgColor }}>
			<span style={{ color: skillObj.fgColor }}>{skillObj.skill}</span>
			<span>
				{skillObj.level === 'Advanced' && '💪'}
				{skillObj.level === 'Proficient' && '👍'}
				{skillObj.level === 'Beginner' && '👌'}
			</span>
		</li>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
