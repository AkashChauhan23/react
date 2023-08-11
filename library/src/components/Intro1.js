// import Intro2 from "./Intro2";

function Intro1() {
    const shoot = () => {
        alert("Great Shot!");
    }

    return (
        <div className="blog-post-intro">
            <h2>I've become a React developer!</h2>
            <div>
                <p>I've completed the React Basics course and I'm happy to announce that I'm now a Junior React Developer!</p>
                <p className="link">Read more...</p>
                <button onClick={shoot}> Click me... </button>
            </div>
        </div>
    );
};

export default Intro1;