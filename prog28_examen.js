function quita_acentos(c_e){
	con_acentos="ÁÉÍÓÚÜÑ";
	sin_acentos="AEIOUUN";
	salida="";
	for (i=0;i<=9;i++){
		letra=c_e.charAt(i);
		pos=con_acentos.indexOf(letra);
		if (pos>=0) letra=sin_acentos.charAt(pos);
		salida=salida+letra;
	}
	return(salida);
}

function espacios(){
	espa=" ";
	sin_espa="_";
	salida="";
	for (i=0;i<=9;i++){
		letra=c_e.charAt(i);
		pos=espa.indexOf(letra);
		if (pos>=0) letra=sin_espa.charAt(pos);
		salida=salida+letra;
	}
	return(salida);
}

function ejecuta(){
	nom=document.f_correo.nom.value;
	ap=document.f_correo.ap.value;
	am=document.f_correo.am.value;
	fec=document.f_correo.fec.value;
	nom=nom.toLowerCase();
	ap=ap.toLowerCase();
	am=am.toLowerCase();
	//alert(fec);
	dia=fec.substr(8,2);
	mes=fec.substr(5,2);
	anio=fec.substr(2,2);
	c_e=nom.charAt(0)+ap+am.charAt(0)+"@empresa.com.mx";
	contrasena=dia+mes+anio;
	if (nom.length==0){
		document.f_correo.nom.style.background="red";
		alert("Error, se debe indicar el nombre");
	}
	else {
		nom=parseInt(nom);
		if (ap.length==0){
			document.f_correo.ap.style.background="red";
			alert("Error, se debe indicar el apellido paterno");
		}
		else {
			ap=parseInt(ap);
			if (am.length==0){
				document.f_correo.am.style.background="red";
				alert("Error, se debe indicar el apellido materno");
			}
			else {
				am=parseInt(am);
				if (fec.length==0){
					document.f_correo.fec.style.background="red";
					alert("Error, se debe indicar la fecha de nacimiento");
				}
				else {
					fec=parseInt(fec);
				}
			}
		}
	}
	//Quitar las Ñ's y vocales con acento y cambiarlas por N y vocales sin acento
	c_e=c_e.replaceAll("ñ","n");
	c_e=c_e.replaceAll("á","a");
	c_e=c_e.replaceAll("é","e");
	c_e=c_e.replaceAll("í","i");
	c_e=c_e.replaceAll("ó","o");
	c_e=c_e.replaceAll("ú","u");
	c_e=c_e.replaceAll("ü","u");
	c_e=c_e.replaceAll(" ","_");

	document.f_correo.salida.value=c_e;
	document.f_correo.contra.value=contrasena;
}

function campo_nom(){
	document.f_correo.nom.style.background="purple";
}

function campo_ap(){
	document.f_correo.ap.style.background="purple";
}

function campo_am(){
	document.f_correo.am.style.background="purple";
}

function campo_fec(){
	document.f_correo.fec.style.background="purple";
}