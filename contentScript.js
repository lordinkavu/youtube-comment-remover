/*  */

let evaluatedHref;
let currentHref = document.location.href;
let checkResult;

const checker = async () => {
  const channelLink = document.querySelector("#text > a");
  const commentSection = document.getElementById("comments");
  if (channelLink && commentSection) {
    return Promise.resolve(true);
  } else {
    return Promise.reject(false);
  }
};

const commentRemover = async () => {
  checkResult = await checker();
  if (checkResult) {
    evaluatedHref = currentHref;
    const commentSection = document.getElementById("comments");
    commentSection.style.display = "none";
  }
};

window.onload = async () => {
  const head = document.querySelector("head");
  let observer = new MutationObserver((mutations) => {
    console.log("mutations");
    currentHref = document.location.href;
    if (
      document.location.pathname === "/watch" &&
      currentHref !== evaluatedHref
    ) {
      commentRemover();
    }
  });
  const config = { childList: true, subtree: true };
  observer.observe(head, config);
};

