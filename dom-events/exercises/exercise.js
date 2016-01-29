// add the corresponding listeneres in order to
// 1 - if a personality is selected it must be displayed on the right
//     of the personality list
// 2 - the browser must only redirect to the twitter handle if it is clicked
//      on the personality selected (not on the list)
//

function crazyCode() {

	var personalities = document.getElementById('personalities'),
		personalitySelected = document.getElementById('personalitySelected');

	function getTarget(target) {
		if (target.nodeName === 'A') {
			target = target.parentNode.parentNode;
		} else if (target.nodeName === 'LI') {
			target = target.parentNode;
		}
		return target;
	}

	function isActive(target) {
		var status = (getTarget(target).getAttribute('data-status')? true : false);
		return status;
	}

	function activePersonality (target) {
		target = getTarget(target);
		resetActives(target);
		target.setAttribute('data-status', 'active');
	}

	function resetActives(target) {
		var actives = document.querySelectorAll('[data-status]'),
			i = 0;
		if (actives.length === 0) {
			return false;
		}
		for (;i < actives.length; i += 1) {
			actives[i].removeAttribute('data-status');
		};
	}

	function showName (target) {
		if (target.nodeName === 'UL') {
			target = target.children[0];
		}
		personalitySelected.innerHTML = target.innerText;
	}

	function redirect(target) {
		window.location.href = target.href;
	}

	function selectPersonality(event) {
		// prevengo el comportamiento default
		// chequeo que elemento fue clickeado
		// si es el li de una personalidad, lo "activo" (pongo nombre en recuadro)
		// si el li ya esta "activo" y se clickea el a, redirijo
		event.preventDefault();

		var target = event.target,
			currentTarget = event.currentTarget;

		if (target !== currentTarget && !isActive(target)) {
			activePersonality(target);
			showName(target);
		} else if (target !== currentTarget && target.nodeName === 'A' && isActive(target)) {
			redirect(target);
		}

	}

	personalities.addEventListener('click', selectPersonality);

}

document.addEventListener('DOMContentLoaded', crazyCode);