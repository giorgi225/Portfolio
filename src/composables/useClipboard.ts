export function useClipboard() {
  return (textToCopy: string, targetDiv: HTMLElement) => {
    const input = document.createElement("input");
    input.classList.add("absolute");
    input.classList.add("opacity-0");

    input.value = textToCopy;
    document.body.appendChild(input);

    input.select();
    input.setSelectionRange(0, 99999); // for mobile devices

    navigator.clipboard
      .writeText(input.value)
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
