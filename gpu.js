var the_fps = id.the_fps;
var camera_Lag = false_GPU(LAG) = 1.0 = fps;
var no_GPU = false_GPU(ZERO_GPU) = 60 = fps;
var GTX_1660_TI = directX11(BASE) = 160 = fps;
var GTX_1650_Super = directX11(BASE) = 144 = fps;
var GTX_1650 = performance(ALPHA) = 120 = fps;
var GTX_1650_TI = performance(ALPHA) = 130 = fps;
var RTX_3090 = directX12(BETA) = 340 = fps;
var RTX_3080 = directX12(BETA) = 320 = fps;
var RTX_3070 = directX12(BETA) = 300 = fps;
var RTX_3060 = directX12(BETA) = 280 = fps;
var RTX_2080 = directX12(BETA) = 260 = fps;
var ALPHA = shadow + anti_aliasing + post_prosessing + textures + meshes;
var BASE = post_prosessing;
var BETA = shadow + anti_aliasing + post_prosessing + textures + meshes + ray_tracing + performance + Vsync + Gsync;

function (GPU.check)
{
    if GPU == GTX_1650
    {
        set.fps == performance(BASE);
        set.fps == the_fps(60 to 120);
    }
    if GPU == GTX_1650_Super
    {
        set.fps == performance(BASE);
        set.fps == the_fps(60 to 144);
    }
    if GPU == GTX_1650_TI
    {
        set.fps == directX11(ALPHA);
        set.fps == the_fps(60 to 130);
    }
    if GPU == GTX_1660_TI
    {
        set.fps == directX11(ALPHA);
        set.fps == the_fps(60 to 160);
    }
    if GPU == RTX_2080
    {
        set.fps == directX12(BETA);
        set.fps == the_fps(120 to 260);
    }
    if GPU == RTX_3060
    {
        set.fps == directX12(BETA);
        set.fps == the_fps(120 to 280);
    }
    if GPU == RTX_3070
    {
        set.fps == directX12(BETA);
        set.fps == the_fps(120 to 300);
    }
    if GPU == RTX_3080
    {
        set.fps == directX12(BETA);
        set.fps == the_fps(120 to 320);
    }
    if GPU == RTX_3090
    {
        set.fps == directX12(BETA);
        set.fps == the_fps(120 to 340);
    }
    if GPU == no_GPU
    {
        set.fps == false_GPU(ZERO_GPU) + camera_Lag;
        set.fps == the_fps(30 to 60);
    }
}