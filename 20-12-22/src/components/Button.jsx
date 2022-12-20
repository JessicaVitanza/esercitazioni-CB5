export function Button() {
    const log = () => {
      console.log("Hello World!");
      window.alert('Ciao Mondo!');
        const AppHeader = document.querySelector(".App-header");
        const textContainer = document.createElement("div");
        const textParagraf = document.createElement("p");

        textContainer.className = "textContainer";
        textParagraf.textContent = "Ciao Mondo!";

        textContainer.append(textParagraf);
        AppHeader.append(textContainer);
    };
  
    return (
      <button aria-label="Click me for show a console log" className="btn" onClick={log}>Click me!</button>
    );
  }