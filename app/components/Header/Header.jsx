import "./Header.scss";
export default function Header() {
  return (
    <>
      {/* <h1>Happy running</h1>
      <h2>Just go out there and run</h2> */}
      <img
        alt="runner dirty shoes"
        src="https://cdn.outsideonline.com/wp-content/uploads/migrated-images_parent/migrated-images_91/fitness-running-shoes_fe.jpg?crop=16:9&width=960&enable=upscale&quality=100"
      />
      <p>
        Welcome to the weather application. It is a tool designed to provide
        users with real-time and forecasted weather information for specific
        locations. It allows users to conveniently check the weather conditions
        for any location they are interested in.{" "}
      </p>
			<button>Find out more</button>
    </>
  );
}
