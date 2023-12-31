anime({
  targets: ".card",
  scale: [0, 1],
});

const cards = document.querySelectorAll(".card");
for (let i = 0; i < cards.length; i++) {
  // let rotationCount = 0;

  cards[i].addEventListener("mouseenter", function () {
    // rotationCount += 1;

    anime({
      targets: `.card-${i + 1}`,
      translateY: -10,
      // rotate: `${rotationCount}turn`,
    });
  });

  cards[i].addEventListener("mouseleave", function () {
    anime({
      targets: `.card-${i + 1}`,
      translateY: 0,
    });
  });
}
