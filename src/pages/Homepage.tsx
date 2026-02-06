import Blogcard from "./Blogcard";


const Homepage = () => {

  return (
    <main className="flex flex-col items-center justify-center  py-2">
      <section className="main-container">
        <h1 className="header-text my-2 text-center">Welcome to Hermod</h1>
      </section>
      <Blogcard />
    </main>
  );
};

export default Homepage;
