let songs=[
    {
        id : 1,
        imgsrc:"./images/dholna.jpeg",
        audiosrc:"./audios/Dholna_Full_Song_Dil_To_Pagal_H_(getmp3.pro).mp3",
        textsrc:"Dholna_Full_Song_ Dil_To_Pagal_H",
    },
    {
        id : 2,
        imgsrc:"./images/dj_bravo-4.jpeg",
        audiosrc:"./audios/Dwayne_DJ_Bravo_-_Champion_Offic_(getmp3.pro).mp3",
        textsrc:"Dwayne_DJ_Bravo_-_Champion_Official_song",
    },
    {
        id : 3,
        imgsrc:"./images/believer.jpeg",
        audiosrc:"./audios/Imagine_Dragons_-_Believer_Lyrics_(getmp3.pro).mp3",
        textsrc:"Imagine_Dragons_-_Believer_Lyrics",
    },
    {
        id : 4,
        imgsrc:"./images/janib.jpeg",
        audiosrc:"./audios/Janib_Duet_Video_Song_Dilliwa_(getmp3.pro).mp3",
        textsrc:"Janib_Duet_Song_Dilliwa",
    },
    {
        id : 5,
        imgsrc:"./images/mere nishan.jpeg",
        audiosrc:"./audios/Jhuki_Teri_Palko_Mein_Mil_Jaye_Mujh_(getmp3.pro).mp3",
        textsrc:"Jhuki_Teri_Palko_Mein _Mil_Jaye_Mujh",
    },
    {
        id : 6,
        imgsrc:"./images/kajwa-4.jpeg",
        audiosrc:"./audios/Kajwa_Official_Song_Nick_Shinde_(getmp3.pro).mp3",
        textsrc:"Kajwa_Official_Song_Nick_Shinde",
    },
    {
        id : 7,
        imgsrc:"./images/kaka mere warga.jpeg",
        audiosrc:"./audios/KAKA_MERE_WARGA_Official_Video_(getmp3.pro).mp3",
        textsrc:"KAKA_MERE_WARGA_Official_Video",
    },
    {
        id : 8,
        imgsrc:"./images/kaka surma.jpg",
        audiosrc:"./audios/Kaka_New_Songs_New_Songs_2021_K_(getmp3.pro).mp3",
        textsrc:"Kaka_New_Songs_ New_Songs_2021_K",
    },
    {
        id : 9,
        imgsrc:"./images/libass.jpeg",
        audiosrc:"./audios/Kale_Je_Libaas_Di_KAKA_Official_(getmp3.pro).mp3",
        textsrc:"Kale_Je_Libaas_Di_KAKA_Official_song",
    },
    {
        id : 10,
        imgsrc:"./images/khuda bhi.jpeg",
        audiosrc:"./audios/Khuda_Bhi_Jab_Video_Song_T-Series_(getmp3.pro).mp3",
        textsrc:"Khuda_Bhi_Jab_Video_Song_T-Series",
    },
    {
        id : 11,
        imgsrc:"./images/suno_na_suno_na.webp",
        audiosrc:"./audios/Suno_Na_Suno_Na_Sunlo_Na_4k_Video_S_(getmp3.pro).mp3",
        textsrc:"Suno_Na_Suno_Na _Sunlo_Na_4k_Song_",
    },
    {
        id : 12,
        imgsrc:"./images/Temporary-Pyar-Original.jpg",
        audiosrc:"./audios/Temporary_Pyar_KAKA_Darling_A_(getmp3.pro).mp3",
        textsrc:"Temporary_Pyar_KAKA_Darling_A",
    },
    {
        id : 13,
        imgsrc:"./images/hall_of_frame.jpeg",
        audiosrc:"./audios/The_Script_-_Hall_Of_Fame_Lyrics_(getmp3.pro).mp3",
        textsrc:"The_Script_-_Hall_Of_Fame_Lyrics",
    },
    {
        id : 14,
        imgsrc:"./images/tu_hi_hakkikat.jpg",
        audiosrc:"./audios/Tu_Hi_Haqeeqat_Full_Video_-_Tum_Mil_(getmp3.pro).mp3",
        textsrc:"Tu_Hi_Haqeeqat_Full_Video_-_Tum_Mil_",
    },
    {
        id : 15,
        imgsrc:"./images/tum_jo_aaye_jindagi me.jpeg",
        audiosrc:"./audios/Tum_Jo_Aaye_Reprise_Version_Full_So_(getmp3.pro).mp3",
        textsrc:"Tum_Jo_Aaye_Reprise _Version_Full_Song",
    },
    
]

function playaudio(songid){

    let song = songs.find((song,index)=>{
        return song.id === songid
    })
    console.log(song)
    document.getElementById("container_txt").innerText = song.textsrc
    document.getElementById("container_image").src = song.imgsrc;
    document.getElementById("container_audio").src = song.audiosrc;
    document.getElementById("container_audio").play();
}











