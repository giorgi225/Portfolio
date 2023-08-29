export function useClipboard() {
  return (textToCopy: string, targetDiv: HTMLElement) => {
    const input = document.createElement("button");
    input.classList.add("absolute");
    input.classList.add("opacity-0");

    input.innerHTML = textToCopy;
    document.body.appendChild(input);

    
    navigator.clipboard
      .writeText(input.innerHTML)
      .then(() => {
        targetDiv.classList.add("copied");
        setTimeout(() => {
          targetDiv.classList.remove("copied");
        }, 1200);
      })
      .catch((err) => {
        console.log("Unable to copy text: ", err);
        alert(`Sorry unable to copy text. can copy from here: ${input.value}`)
      });

    document.body.removeChild(input);
  };
}
