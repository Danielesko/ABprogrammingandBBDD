// navbar
import { Collapse, initMDB } from "mdb-ui-kit";

initMDB({ Collapse });
//formulario registro
function mostrarForm(formType) {
	if (formType === 'login') {
		document.getElementById('loginForm').style.display = 'block';
		document.getElementById('registroForm').style.display = 'none';
	} else if (formType === 'registro') {
		document.getElementById('loginForm').style.display = 'none';
		document.getElementById('registroForm').style.display = 'block';
	}
}