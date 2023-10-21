function HostelList(props){
	console.log(props.hostels);
	return props.hostels.map((hostel, index) => (
		<div key={index}>{index+1}. {hostel}</div>
	));
}

function alphaList(hostels){
	let list = [];
	for(let hostel of hostels){
		list.push(<li>{hostel}</li>)
	}

	return list;
}

// function hostelList(hostels){
// 	let list = [];
// 	for(let hostel in hostels){
// 		const item = hostels[hostel];
// 		list.push(<li>{item}</li>)
// 	}

// 	return list;
// }

function writeHello(str){
	return <div>{str}</div>
}

const ftemp = () => {
	
}

export default function MainContent() {

	const helloElement = "Hello World!!";
	let a = 10, b = 20;
	const alpha = ["A", "B", "C", "D", "E"];

	return (
		<div className="w-[85vw] bg-green-300 h-[88vh]">
			{helloElement}
			{a + b}
			{writeHello("Hello function!!")}

			<writeHello str="Hello function!!" />

			{/* {a<b && <div>True</div>}
			{a>b && <div>False</div>} */}

			{a>b ? <div>True</div> : <div>False</div>}
			
			<ul className="text-3xl">
				{alpha.map((item, index) => (
					<li key={index}>{item}</li>
				)
				)}
			</ul>

			<ul>
				{alphaList(alpha)}
			</ul>
		</div>
	);
}




