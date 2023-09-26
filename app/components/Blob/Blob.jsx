export default function Blob({ items }) {
	return (
		<div className="">
			{items.map((item) => {
				return (
					<div>
						<p>Coord lon: {item.coord.lon}</p>
						<p>Weather main: {item.weather[0].main}</p>
						<p>Weather desc: {item.weather[0].description}</p>
					</div>
				);
			})}
		</div>
	);
}
