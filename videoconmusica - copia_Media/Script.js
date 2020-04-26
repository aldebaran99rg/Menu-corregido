function Movie_OnStart(){SoundPlay("Evangelion opening",true);
VideoSetVolume("Video",0);

}

function Frame__0_0(ID){Pause();

}

function Frame__1_0(ID){Pause();

}

function Sonidovideo_OnClick(){SoundPlay("Sonido boton",false);
VideoSetVolume("Video",100);

}

function Sonidovideo_OnRelease(){SoundPlay("Sonido boton",false);
VideoSetVolume("Video",0);
}

function Pausarvideo_OnClick(){VideoPause("Video");
SoundPlay("Sonido boton",false);

}

function Pausarvideo_OnRelease(){SoundPlay("Sonido boton",false);
VideoResume("Video");

}

function Musicadeambiente_OnClick(){ToggleButtonRelease("video");
GotoSceneName("Escena sonido");
SoundPlay("Sonido boton",false);

}

function Pausarmusica_OnClick(){SoundPause("Evangelion opening");
SoundPlay("Sonido boton",false);

}

function Pausarmusica_OnRelease(){SoundPlay("Sonido boton",false);
SoundResume("Evangelion opening");

}

function Volveravideo_OnClick(){ToggleButtonRelease("musica");
GotoSceneName("Escena video");
SoundPlay("Sonido boton",false);

}

