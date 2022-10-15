/**
 * Seals 2022 continuation of tech challenge(first)
 * bryanjeromevaliente@gmail.com
 * This javascript sheet is the code for the improved challenge that were suppposed to have due on saturday october 15
 */

// Function made to play the animation required when called
function playAnimation() {
  // First the queryselector is there to select the h1 tag and then the style.setproperty is there to change the animation property to ...
  document
    .querySelector("h1")
    .style.setProperty(
      "animation",
      "5s ease 0s infinite normal none running moveone"
    );
}

/**
     * // exact same function made as before except this time this one is labeled as the offanimation one because 
// this function will stop any animation playing from the heading tag because we changed the (#of repeating times)
infinite to zero
*/

function offAnimation() {
  document
    .querySelector("h1")
    .style.setProperty("animation", "5s ease 0s normal 0 running moveone");
}
