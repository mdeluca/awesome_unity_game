#pragma strict


function Update() {
	var rotate : float = Time.deltaTime*80;
	transform.Rotate (rotate, 0, 0);
}


