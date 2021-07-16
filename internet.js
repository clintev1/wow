var PING = internet(OP) = 1 to 20 = ping;
var PING = internet(GG) = 20 to 40 = ping;
var PING = internet(PATATO) = 40 to 60 = ping + camera_Lag = 0.5;
var PING = internet(TRASH) = 60 to 80 = ping + camera_Lag = 1.0;
var PING = internet(CANNOT_SPEAK) = 80 to 100 = ping + camera_Lag = 1.5;
var PING = internet(SORRY_CHARLIE_BUT_ITS_NOT_YOUR_DAY_TODAY) = 100 to infinite() = ping + camera_Lag = 2.0;

function (PING.check)
{
    if PING == OP
    {
        internet.PING == set.PING 1 to 20;
    }
    if PING == GG
    {
        internet.PING == set.PING 20 to 40;
    }
    if PING == PATATO
    {
        internet.PING == set.PING 40 to 60 + camera_Lag = 0.9;
    }
    if PING == TRASH
    {
        internet.PING == set.PING 60 to 80 + camera_Lag = 1.0;
    }
    if PING ==  CANNOT_SPEAK
    {
        internet.PING == set.PING 80 to 100 + camera_Lag = 1.5;
    }
    if PING == SORRY_CHARLIE_BUT_ITS_NOT_YOUR_DAY_TODAY
    {
        internet.PING == set.PING 100 to infinite() + camera_Lag = 2.0;
    }
}