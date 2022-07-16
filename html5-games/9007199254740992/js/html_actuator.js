function HTMLActuator(){this.tileContainer=document.querySelector(".tile-container"),this.scoreContainer=document.querySelector(".score-container"),this.bestContainer=document.querySelector(".best-container"),this.messageContainer=document.querySelector(".game-message"),this.score=0}HTMLActuator.prototype.actuate=function(t,e){var o=this
window.requestAnimationFrame(function(){o.clearContainer(o.tileContainer),t.cells.forEach(function(t){t.forEach(function(t){t&&o.addTile(t)})}),o.updateScore(e.score),o.updateBestScore(e.bestScore),e.over&&o.message(!1),e.won&&o.message(!0)})},HTMLActuator.prototype.restart=function(){this.clearMessage()},HTMLActuator.prototype.clearContainer=function(t){for(;t.firstChild;)t.removeChild(t.firstChild)},HTMLActuator.prototype.addTile=function(t){var e=this,o=document.createElement("div"),i=t.previousPosition||{x:t.x,y:t.y}
positionClass=this.positionClass(i)
var a=["tile","tile-"+t.value,positionClass]
t.value>1048576&&(a=["tile","tile-1048576",positionClass]),this.applyClasses(o,a),o.textContent=t.value,t.previousPosition?window.requestAnimationFrame(function(){a[2]=e.positionClass({x:t.x,y:t.y}),e.applyClasses(o,a)}):t.mergedFrom?(a.push("tile-merged"),this.applyClasses(o,a),t.mergedFrom.forEach(function(t){e.addTile(t)})):(a.push("tile-new"),this.applyClasses(o,a)),this.tileContainer.appendChild(o)},HTMLActuator.prototype.applyClasses=function(t,e){t.setAttribute("class",e.join(" "))},HTMLActuator.prototype.normalizePosition=function(t){return{x:t.x+1,y:t.y+1}},HTMLActuator.prototype.positionClass=function(t){return t=this.normalizePosition(t),"tile-position-"+t.x+"-"+t.y},HTMLActuator.prototype.updateScore=function(t){this.clearContainer(this.scoreContainer)
var e=t-this.score
if(this.score=t,this.scoreContainer.textContent=this.score,e>0){var o=document.createElement("div")
o.classList.add("score-addition"),o.textContent="+"+e,this.scoreContainer.appendChild(o)}},HTMLActuator.prototype.updateBestScore=function(t){this.bestContainer.textContent=t},HTMLActuator.prototype.message=function(t){var e=t?"game-won":"game-over",o=t?"You win!":"Game over!"
this.messageContainer.classList.add(e),this.messageContainer.getElementsByTagName("p")[0].textContent=o},HTMLActuator.prototype.clearMessage=function(){this.messageContainer.classList.remove("game-won","game-over")}
