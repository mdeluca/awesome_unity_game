#pragma strict
/*comment*/

function Update() {
	var rotate : float = Time.deltaTime*100;
	transform.Rotate (rotate, 0, 0);
}


