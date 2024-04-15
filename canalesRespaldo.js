/* 
Guía rápida:

    'nombre': {                   (Nombre objeto/canal, no repetir entre señales debe ser único (sin espacios))
        'nombre': 'nombre'        (Nombre del canal a mostrar en botón y barra que dirige a su origen cuando esta activo)

tipos de enlaces posibles [Recordar utilizar solo enlaces https si se aloja en GitHub y solo 1 tipo por canal/señal]:

        'iframe_url': 'url'        (contenido que va dentro de un iframe (un embed directo))
        'm3u8_url': 'url'          (para enlaces ".m3u8", no listas ".m3u". Solo canales individuales)
        'yt_id': 'url'             (ID referente a un canal de Youtube [https://www.youtube.com/channel/"yt_id"]. NO REQUIERE 'fuente' DEBIDO A REDUNDANCIA)
        'yt_embed': 'url'          (se usa para 1 video directamente [https://www.youtube.com/watch?v="yt_embed"])
        'yt_playlist': 'url'       (... [https://www.youtube.com/playlist?list="yt_playlist"])

        'fuente': 'url'           ("fuente" es el enlace de origen de la señal, a modo de transparencia y libertad de abandonar la página si solo se quiere continuar con dicha señal, si se extrae una señal ya sea tipo "iframe" o "m3u8" de www.pagina-ejemplo.cl debe de ponerse www.pagina-ejemplo.cl en "fuente". Si no se obtiene señal desde el emisor oficial como tal, se utiliza el sitio del emisor sobre el de terceros (ejemplo: saque canal de una lista IPTV, por lo que pongo el sitio del canal, no la lista IPTV. Ya que eso va en el listado de canales en archivo README))
        'pais': 'nombre país'     (nombre país es en base a ISO 3166, https://flagcdn.com/en/codes.json (Recomendable en minúsculas))
        'alt_icon': 'icono bootstrap'  (este concepto de icono alternativo se usa mayoritariamente para señales que no pertenece a un país en específico tanto como para quizás segmentar por tipo de señal, si es un canal o una radio. No es obligatorio)
    }

by Alplox 
https://github.com/Alplox/teles
*/

const listaCanalesViejo = {
//Votaciones
    /* 'tips': {
        'nombre': '🗳️ Tips Votaciones',
        'iframe_url': 'https://alplox.github.io/teles/assets/js/archivo.html',
        'fuente': 'https://alplox.github.io/teles/',
        'pais': 'cl'
    },
    'decidechile': {
        'nombre': '🗳️ decidechile.cl',
        'iframe_url': 'https://live.decidechile.cl/',
        'fuente': 'https://live.decidechile.cl/',
        'pais': 'cl'
    },
    'servelelecciones': {
        'nombre': '🗳️ servelelecciones.cl',
        'iframe_url': 'https://servelelecciones.cl/#/votacion/elecciones_constitucion/global/19001',
        'fuente': 'https://servelelecciones.cl/#/votacion/elecciones_constitucion/global/',
        'pais': 'cl'
    },
    'servel': {
        'nombre': '🗳️ Servicio Electoral de Chile',
        'yt_id': 'UCB8s6rETjmWgXrp_BxyXqdg',
        'pais': 'cl'
    }, */
// CHILE
    "24-horas": {
        "nombre": "24 horas",
        "yt_id": "UCTXNz3gjAypWp3EhlIATEJQ",
        "pais": "cl"
    },
    "24-horas-2": {
        "nombre": "24 horas 2",
        "iframe_url": "https://mdstrm.com/live-stream/57d1a22064f5d85712b20dab?jsapi=true&autoplay=true&volume=0",
        "fuente": "https://www.24horas.cl/envivo/",
        "pais": "cl"
    },
    "24-horas-3": {
        "nombre": "24 horas 3",
        "iframe_url": "https://mdstrm.com/live-stream/57d1a22064f5d85712b20dab?jsapi=true&autoplay=true&controls=true&volume=0&mute=true&player=57f4e28f9c53768535d65782&access_token=&custom.preroll=&custom.overlay=",
        "fuente": "https://www.24horas.cl/envivo/",
        "pais": "cl"
    },
    "24-horas-4": {
        "nombre": "24 horas 4",
        "iframe_url": "https://player.twitch.tv/?channel=24horas_tvn&parent=alplox.github.io",
        "fuente": "https://www.twitch.tv/24horas_tvn",
        "pais": "cl"
    },
    "24-horas-5": {
        "nombre": "24 horas 5",
        "iframe_url": "https://mdstrm.com/live-stream/57d1a22064f5d85712b20dab?jsapi=true&autoplay=true&volume=0",
        "fuente": "https://www.24horas.cl/envivo/",
        "pais": "cl"
    },
    "24-horas-6": {
        "nombre": "24 horas 6",
        "iframe_url": "https://mdstrm.com/live-stream/57d1a22064f5d85712b20dab?jsapi=true&autoplay=true&controls=true&volume=0&mute=true&player=57f4e28f9c53768535d65782&access_token=&custom.preroll=&custom.overlay=",
        "fuente": "https://www.24horas.cl/envivo/",
        "pais": "cl"
    },
    "24-horas-s2": {
        "nombre": "24 horas s2",
        "iframe_url": "https://mdstrm.com/live-stream/57d1a22064f5d85712b20dab?jsapi=true&autoplay=true&volume=0",
        "fuente": "https://www.24horas.cl/envivo/",
        "pais": "cl"
    },
    "tvn": {
        "nombre": "TVN",
        "yt_id": "UCaVaCaiG6qRzDiJDuEGKOhQ",
        "pais": "cl"
    },
    "tvn-2": {
        "nombre": "TVN 2",
        "m3u8_url": "https://mdstrm.com/live-stream-playlist-v/555c9a91eb4886825b07ee7b.m3u8",
        "fuente": "https://www.24horas.cl/envivo/",
        "pais": "cl"
    },
    "meganoticias": {
        "nombre": "Meganoticias",
        "yt_id": "UCkccyEbqhhM3uKOI6Shm-4Q",
        "pais": "cl"
    },
    "meganoticias-2": {
        "nombre": "Meganoticias 2",
        "iframe_url": "https://player.twitch.tv/?channel=meganoticiascl&parent=alplox.github.io",
        "fuente": "https://www.twitch.tv/meganoticiascl",
        "pais": "cl"
    },
    "meganoticias-3": {
        "nombre": "Meganoticias 3",
        "iframe_url": "https://mdstrm.com/live-stream/561430ae330428c223687e1e?autoplay=true&volume=0",
        "fuente": "https://www.meganoticias.cl/senal-en-vivo/meganoticias/",
        "pais": "cl"
    },
    "meganoticias-4": {
        "nombre": "Meganoticias 4",
        "iframe_url": "https://rudo.video/live/mega",
        "fuente": "https://www.meganoticias.cl/senal-en-vivo/meganoticias/",
        "pais": "cl"
    },
    "mega": {
        "nombre": "Mega",
        "m3u8_url": "https://unlimited1-cl-isp.dps.live/mega/mega.smil/playlist.m3u8",
        "fuente": "https://www.mega.cl/",
        "pais": "cl"
    },
    "mega-2": {
        "nombre": "Mega 2",
        "m3u8_url": "https://unlimited1-cl-isp.dps.live/mega/mega.smil/playlist.m3u8",
        "fuente": "https://www.mega.cl/",
        "pais": "cl"
    },
    "t13": {
        "nombre": "T13",
        "yt_id": "UCsRnhjcUCR78Q3Ud6OXCTNg",
        "pais": "cl"
    },
    "t13-2": {
        "nombre": "T13 2",
        "iframe_url": "https://player.twitch.tv/?channel=t13envivo&parent=alplox.github.io",
        "fuente": "https://www.twitch.tv/t13envivo",
        "pais": "cl"
    },
    "t13-3": {
        "nombre": "T13 3",
        "m3u8_url": "https://redirector.rudo.video/hls-video/10b92cafdf3646cbc1e727f3dc76863621a327fd/t13/t13.smil/playlist.m3u8",
        "fuente": "https://www.t13.cl/en-vivo",
        "pais": "cl"
    },
    "t13-4": {
        "nombre": "T13 4",
        "iframe_url": "https://rudo.video/live/t13",
        "fuente": "https://www.t13.cl/en-vivo",
        "pais": "cl"
    },
    "canal-13": {
        "nombre": "Canal 13",
        "iframe_url": "https://rudo.video/live/c13",
        "fuente": "https://www.13.cl/en-vivo",
        "pais": "cl"
    },
    "canal-13-2": {
        "nombre": "Canal 13 2",
        "m3u8_url": "https://jireh-hls-live-video.dpsgo.com/hls-video/10b92cafdf3646cbc1e727f3dc76863621a327fd/c13/playlist.m3u8",
        "fuente": "https://www.13.cl/en-vivo",
        "pais": "cl"
    },
    "canal-13-3": {
        "nombre": "Canal 13 3",
        "m3u8_url": "https://dai.google.com/linear/hls/pa/event/bFL1IVq9RNGlWQaqgiFuNw/stream/529d29eb-8117-44d3-9e21-cdfd68c3c097:MRN2/master.m3u8",
        "fuente": "https://www.13.cl/en-vivo",
        "pais": "cl"
    },
    "canal-13-N": {
        "nombre": "canal 13 N",
        "yt_id": "UCd4D3LfXC_9MY2zSv_3gMgw",
        "fuente": "https://www.13.cl/en-vivo",
        "pais": "cl"
    },
    "cnn-cl": {
        "nombre": "CNN Chile",
        "yt_id": "UCpOAcjJNAp0Y0fhznRrXIJQ",
        "pais": "cl"
    },
    "chv-noticias": {
        "nombre": "CHV Noticias",
        "yt_id": "UCRsUoZYC1ULUspipMRnMhwg",
        "pais": "cl"
    },
    "chv-noticias-2": {
        "nombre": "CHV Noticias 2",
        "m3u8_url": "https://redirector.rudo.video/hls-video/10b92cafdf3646cbc1e727f3dc76863621a327fd/chvn/chvn.smil/playlist.m3u8?DVR",
        "fuente": "https://www.chvnoticias.cl/senal-online/",
        "pais": "cl"
    },
    "chv-noticias-3": {
        "nombre": "CHV Noticias 3",
        "iframe_url": "https://rudo.video/live/chvn",
        "fuente": "https://www.chvnoticias.cl/senal-online/",
        "pais": "cl"
    },
    "chv": {
        "nombre": "CHV",
        "yt_id": "UC8EdTmyUaFIfZvVttJ9lgIA",
        "pais": "cl"
    },
    "chv-noticias-4": {
        "nombre": "CHV Noticias 4",
        "iframe_url": "https://redirector.rudo.video/hls-video/10b92cafdf3646cbc1e727f3dc76863621a327fd/chvn/chvn.smil/playlist.m3u8?DVR",
        "fuente": "https://www.chvnoticias.cl/senal-online/",
        "pais": "cl"
    },
    "chv-noticias-5": {
        "nombre": "CHV Noticias 5",
        "iframe_url": "https://rudo.video/live/chvn",
        "fuente": "https://www.chvnoticias.cl/senal-online/",
        "pais": "cl"
    },
    "la-red": {
        "nombre": "La Red",
        "m3u8_url": "https://unlimited1-cl-isp.dps.live/lared/lared.smil/playlist.m3u8",
        "fuente": "https://www.lared.cl/senal-online",
        "pais": "cl"
    },
    "la-red-2": {
        "nombre": "La Red 2",
        "iframe_url": "https://rudo.video/live/lared",
        "fuente": "https://www.lared.cl/senal-online",
        "pais": "cl"
    },
    "la-red-3": {
        "nombre": "La Red 3",
        "iframe_url": "https://alba-cl-lared-lared.stream.mediatiquestream.com/index.m3u8",
        "fuente": "https://www.lared.cl/senal-online",
        "pais": "cl"
    },
    "cooperativa": {
        "nombre": "Radio Cooperativa",
        "iframe_url": "https://rudo.video/live/coopetv?volume=0&mute=1",
        "fuente": "http://programas.cooperativa.cl/showalairelibre/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "bbtv": {
        "nombre": "Radio Biobio TV",
        "iframe_url": "https://rudo.video/live/bbtv?volume=0&mute=1",
        "fuente": "https://www.biobiochile.cl/biobiotv/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "bbtv2": {
        "nombre": "Radio Biobio TV 2",
        "iframe_url": "https://rudo.video/live/bbtv?autostart=1&volume=0&streamingLabel=home&tag=eyJwcmUiOiJodHRwczovL3B1YmFkcy5nLmRvdWJsZWNsaWNrLm5ldC9nYW1wYWQvYWRzP2l1PS8xMDk4Mzg1L2Jpb2Jpb3R2L2FkX3ZpZGVvJnRmY2Q9MCZucGE9MCZzej02NDB4NDgwJmN1c3RfcGFyYW1zPXRpcG8lM0Rob21lLWJidHYlMjZjYXRlZ29yeS1wcmltYXJ5JTNEcG9ydGFkYS1iYnR2JmdkZnBfcmVxPTEmb3V0cHV0PXZhc3QmdW52aWV3ZWRfcG9zaXRpb25fc3RhcnQ9MSZlbnY9dnAmaW1wbD1zJmNvcnJlbGF0b3I9JnZwbXV0ZT0wJnZwYT1jbGljayZ2cG9zPXByZXJvbGwiLCJwb3N0IjowLCJtaWQiOnsidGFnIjowfSwib3ZlciI6eyJ0YWciOjB9fQ==",
        "fuente": "https://www.biobiochile.cl/biobiotv/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "adn": {
        "nombre": "Radio ADN",
        "iframe_url": "https://rudo.video/live/adntv?volume=0&mute=1",
        "fuente": "http://tv.adnradio.cl/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "adn-2": {
        "nombre": "Radio ADN 2",
        "yt_id": "UCczkrFICr0xEgDsk51zZojA",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "adn-3": {
        "nombre": "Radio ADN 3",
        "iframe_url": "https://rudo.video/live/adntv?volume=0&mute=1",
        "fuente": "http://tv.adnradio.cl/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "duna": {
        "nombre": "Radio Duna",
        "iframe_url": "https://rudo.video/live/dunatv?volume=0&mute=1",
        "fuente": "https://www.duna.cl/tv/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "infinita": {
        "nombre": "Radio Infinita",
        "iframe_url": "https://mdstrm.com/live-stream/63a066e54ed536087960b550?autoplay=true&player=63af7b6cc5048f0846557764",
        "fuente": "http://www.infinita.cl/home/",
        "pais": "cl"
    },
    "infinita-2": {
        "nombre": "Radio Infinita-2",
        "iframe_url": "https://rudo.video/live/infinitatv?volume=0&mute=1",
        "fuente": "http://www.infinita.cl/home/",
        "pais": "cl"
    },
    "universo": {
        "nombre": "Radio Universo",
        "iframe_url": "https://redirector.dps.live/universo/aac/icecast.audio",
        "fuente": "https://www.universo.cl/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "radio-ae": {
        "nombre": "Radio AE Radio DuocUC",
        "iframe_url": "https://live.grupoz.cl/3e3852b5c1ea7821ab9cdfadbbe735f2?sound=0",
        "fuente": "https://www.aeradio.cl/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "carolina-tv": {
        "nombre": "Radio Carolina TV",
        "iframe_url": "https://mdstrm.com/live-stream/63a06468117f42713374addd?autoplay=true&player=63af7b6cc5048f0846557764",
        "fuente": "https://www.carolina.cl/tv/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "carolina-tv2": {
        "nombre": "Radio Carolina TV2",
        "iframe_url": "https://rudo.video/live/carolinatv?volume=0&mute=1",
        "fuente": "https://www.carolina.cl/tv/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "romantica-tv": {
        "nombre": "Radio Romántica TV",
        "iframe_url": "https://mdstrm.com/live-stream/63a0674c1137d408b45d4821?autoplay=true&player=63af7b6cc5048f0846557764",
        "fuente": "https://www.romantica.cl/romantica-tv/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "radio-genial": {
        "nombre": "Radio Genial 100.5 FM",
        "m3u8_url": "https://v1.tustreaming.cl:19360/genialtv/genialtv.m3u8",
        "fuente": "https://radiogenial.cl/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "radio-la-clave": {
        "nombre": "Radio La Clave",
        "iframe_url": "https://rudo.video/live/laclavetv?volume=0&mute=1",
        "fuente": "https://radiolaclave.cl/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "radio-el-conquistador": {
        "nombre": "Radio El Conquistador FM",
        "m3u8_url": "https://redirector.rudo.video/hls-video/931b584451fa6dd1313ee66efbfd5802e3f3bcea/elconquistadortv/elconquistadortv.smil/playlist.m3u8",
        "fuente": "https://www.elconquistadorfm.net/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "radio-el-conquistador-2": {
        "nombre": "Radio El Conquistador FM 2",
        "iframe_url": "https://rudo.video/live/elconquistadortv",
        "fuente": "https://www.elconquistadorfm.net/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "radio-el-conquistador-3": {
        "nombre": "Radio El Conquistador FM 3",
        "iframe_url": "https://player.twitch.tv/?channel=elconquistadortv&parent=alplox.github.io",
        "fuente": "https://www.twitch.tv/elconquistadortv",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "radio-folclor-chile": {
        "nombre": "Radio Folclor de Chile",
        "yt_id": "UC0Hl8kJe8Xwv8g63Q4qefQg",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "sembrador": {
        "nombre": "Radio El Sembrador",
        "m3u8_url": "https://tv.streaming-chile.com:1936/elsembrador/elsembrador/playlist.m3u8",
        "fuente": "https://tv.radioelsembrador.cl/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "radio-nuble": {
        "nombre": "Radio Ñuble",
        "m3u8_url": "https://live.tvcontrolcp.com:1936/rnuble/rnuble/playlist.m3u8",
        "fuente": "https://radionuble.cl/v1/",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "alternativa-fm": {
        "nombre": "Radio Alternativa FM",
        "m3u8_url": "https://5eaccbab48461.streamlock.net:1936/8216/8216/playlist.m3u8",
        "fuente": "https://www.alternativafm.cl/p/alternativa-tv.html",
        "pais": "cl",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "stgo-tv": {
        "nombre": "Stgo TV",
        "m3u8_url": "https://stv4.janus.cl/playlist/stream.m3u8",
        "fuente": "https://www.santiagotelevision.cl/",
        "pais": "cl"
    },
    "tv-mas": {
        "nombre": "TV+",
        "m3u8_url": "https://mdstrm.com/live-stream-playlist/5c0e8b19e4c87f3f2d3e6a59.m3u8",
        "fuente": "https://www.tvmas.tv/",
        "pais": "cl"
    },
    "tv-mas-2": {
        "nombre": "TV+ 2",
        "iframe_url": "https://mdstrm.com/live-stream/5c0e8b19e4c87f3f2d3e6a59?autoplay=true&volume=0",
        "fuente": "https://www.tvmas.tv/",
        "pais": "cl"
    },
    "voz-sobran": {
        "nombre": "La Voz De Los Que Sobran",
        "iframe_url": "https://rudo.video/live/lvdlqs",
        "fuente": "https://lavozdelosquesobran.cl/",
        "pais": "cl"
    },
    "puranoticia": {
        "nombre": "Puranoticia TV",
        "m3u8_url": "https://pnt.janusmedia.tv/hls/pnt.m3u8",
        "fuente": "https://puranoticia.pnt.cl/",
        "pais": "cl"
    },
    "holvoet-tv": {
        "nombre": "Holvoet TV",
        "iframe_url": "https://rudo.video/live/holvoettv",
        "fuente": "https://holvoet.cl/en-vivo/",
        "pais": "cl"
    },
    "holvoet-tv-2": {
        "nombre": "Holvoet TV 2",
        "m3u8_url": "https://unlimited1-cl-isp.dps.live/holvoettv/holvoettv.smil/playlist.m3u8",
        "fuente": "https://holvoet.cl/en-vivo/",
        "pais": "cl"
    },
    "antofagasta-tv": {
        "nombre": "Antofagasta TV",
        "m3u8_url": "https://unlimited6-cl.dps.live/atv/atv.smil/atv/livestream2/playlist.m3u8",
        "fuente": "https://www.antofagasta.tv/",
        "pais": "cl"
    },
    "antofagasta-tv-2": {
        "nombre": "Antofagasta TV 2",
        "m3u8_url": "https://unlimited1-cl-isp.dps.live/atv/atv.smil/playlist.m3u8",
        "fuente": "https://www.antofagasta.tv/",
        "pais": "cl"
    },
    "antofagasta-tv-3": {
        "nombre": "Antofagasta TV 3",
        "m3u8_url": "https://unlimited6-cl.dps.live/atv/atv.smil/playlist.m3u8",
        "fuente": "https://www.antofagasta.tv/",
        "pais": "cl"
    },
    "atacama-tv": {
        "nombre": "Atacama TV",
        "m3u8_url": "https://v2.tustreaming.cl/atacamatv/index.m3u8",
        "fuente": "http://atacamatelevision.com/",
        "pais": "cl"
    },
    "atacama-tv-2": {
        "nombre": "Atacama TV 2",
        "m3u8_url": "https://v2.tustreaming.cl/atacamatv/tracks-v1a1/mono.m3u8",
        "fuente": "http://atacamatelevision.com/",
        "pais": "cl"
    },
    "canal-9": {
        "nombre": "Canal 9",
        "iframe_url": "https://rudo.video/live/c9?volume=0&mute=1",
        "fuente": "https://www.canal9.cl/en-vivo/",
        "pais": "cl"
    },
    "canal-9-2": {
        "nombre": "Canal 9 2",
        "m3u8_url": "https://unlimited6-cl.dps.live/c9/c9.smil/c9/livestream1/chunks.m3u8",
        "fuente": "https://www.canal9.cl/en-vivo/",
        "pais": "cl"
    },
    "tvu": {
        "nombre": "TVU",
        "iframe_url": "https://rudo.video/live/tvu?volume=0&mute=1",
        "fuente": "https://www.tvu.cl/",
        "pais": "cl"
    },
    "tvu-2": {
        "nombre": "TVU 2",
        "m3u8_url": "https://unlimited6-cl.dps.live/tvu/tvu.smil/playlist.m3u8",
        "fuente": "https://www.tvu.cl/",
        "pais": "cl"
    },
    "canal-21": {
        "nombre": "Canal 21",
        "m3u8_url": "https://tls-cl.cdnz.cl/canal21tv/live/playlist.m3u8",
        "fuente": "https://www.canal21tv.cl/wp/en-vivo/",
        "pais": "cl"
    },
    "canal-21-2": {
        "nombre": "Canal 21 2",
        "m3u8_url": "https://tls-cl.cdnz.cl/canal21tv/live/playlist.m3u8",
        "fuente": "https://www.canal21tv.cl/wp/en-vivo/",
        "pais": "cl"
    },
    "nublevision": {
        "nombre": "Ñublevision",
        "m3u8_url": "https://v1.tustreaming.cl/nubletv/index.m3u8",
        "fuente": "https://nublevision.cl/",
        "pais": "cl"
    },
    "nuble-RTV": {
        "nombre": "Ñuble RVT",
        "m3u8_url": "https://paneltv.online:1936/8050/8050/playlist.m3u8",
        "fuente": "https://canalrtv.cl/",
        "pais": "cl"
    },
    "pinguino-tv": {
        "nombre": "Pingüino TV",
        "iframe_url": "https://elpinguino.com/reproductor/",
        "fuente": "https://elpinguino.com/reproductor/",
        "pais": "cl"
    },
    "pinguino-tv-2": {
        "nombre": "Pingüino TV 2",
        "m3u8_url": "https://streaming.elpinguino.com:5391/live/EP.smil/playlist.m3u8",
        "fuente": "https://elpinguino.com/reproductor/",
        "pais": "cl"
    },
    "itv-patagonia": {
        "nombre": "ITV Patagonia",
        "iframe_url": "https://rudo.video/live/itv?volume=0&mute=1",
        "fuente": "https://www.itvpatagonia.com/",
        "pais": "cl"
    },
    "itv-patagonia-2": {
        "nombre": "ITV Patagonia 2",
        "m3u8_url": "https://unlimited1-cl-isp.dps.live/itv/itv.smil/playlist.m3u8",
        "fuente": "https://www.itvpatagonia.com/",
        "pais": "cl"
    },
    "ucv": {
        "nombre": "UCV TV",
        "iframe_url": "https://rudo.video/live/ucvtv2?volume=0&mute=1",
        "fuente": "https://pucvmultimedios.cl/senal-online-tv.php",
        "pais": "cl"
    },
    "uatv": {
        "nombre": "UATV",
        "iframe_url": "https://rudo.video/live/uatv?volume=0&mute=1",
        "fuente": "https://uatv.cl/uatv-en-vivo/",
        "pais": "cl"
    },
    "vtv": {
        "nombre": "VTV",
        "iframe_url": "https://rudo.video/live/vtv?volume=0&mute=1",
        "fuente": "http://canalvtv.cl/vtv/",
        "pais": "cl"
    },
    "canal-33": {
        "nombre": "Canal 33",
        "m3u8_url": "https://oracle.streaminghd.cl/eduardo555/eduardo555/playlist.m3u8",
        "fuente": "http://www.canal33.cl/online.php",
        "pais": "cl"
    },
    "contivision": {
        "nombre": "Contivision",
        "iframe_url": "https://rudo.video/live/cm?volume=0&mute=1",
        "fuente": "http://w.contivision.cl/cvn/envivo.php",
        "pais": "cl"
    },
    "osorno-tv": {
        "nombre": "Osorno TV",
        "m3u8_url": "https://panel.tvstream.cl:1936/8036/8036/playlist.m3u8",
        "fuente": "https://www.osornotv.cl/envivo.html",
        "pais": "cl"
    },
    "tv-salud": {
        "nombre": "TV Salud",
        "iframe_url": "https://panel.miplay.cl:8081/tvsalud/embed.html",
        "fuente": "https://tvsalud.cl/",
        "pais": "cl"
    },
    "fm-tiempo": {
        "nombre": "FM Tiempo",
        "iframe_url": "https://rudo.video/live/fmtiempotv?volume=0&mute=1",
        "fuente": "https://www.fmtiempo.cl/",
        "pais": "cl"
    },
    "romantica-tv": {
        "nombre": "Romántica TV",
        "iframe_url": "https://rudo.video/live/romanticatv?volume=0&mute=1",
        "fuente": "https://www.romantica.cl/romantica-tv/",
        "pais": "cl"
    },
    "radio-genial": {
        "nombre": "Radio Genial 100.5 FM",
        "iframe_url": "https://v1.tustreaming.cl:2000/VideoPlayer/genialtv?autoplay=1",
        "fuente": "https://radiogenial.cl/",
        "pais": "cl"
    },
    "alegria-tv": {
        "nombre": "alegria tv",
        "iframe_url": "https://video.compuwebecuador.com/hybrid-stream-video-widget/radioalegriafm",
        "fuente": "https://radioalegriafm.com/alegria-tv/",
        "pais": "cl"
    },
    "mi-radio-es-mas": {
        "nombre": "Mi Radio es Más",
        "yt_id": "UCflUbt1g29kPG-H9SV5QIyw",
        "fuente": "https://www.youtube.com/@MIRADIO_TV/streams",
        "pais": "cl"
    },
    "mi-radio-es-mas2": {
        "nombre": "Mi Radio es Más2",
        "iframe_url": "https://live.grupoz.cl/7228e98d389d9d54ca6d5ab974f2ea15",
        "fuente": "https://www.miradiols.cl/mi-radio-tv/",
        "pais": "cl"
    },
    "radio-la-clave": {
        "nombre": "Radio La Clave",
        "iframe_url": "https://rudo.video/live/laclavetv?volume=0&mute=1",
        "fuente": "https://radiolaclave.cl/",
        "pais": "cl"
    },
    "radio-folclor-chile": {
        "nombre": "Radio Folclor de Chile",
        "yt_id": "UC0Hl8kJe8Xwv8g63Q4qefQg",
        "fuente": "https://radiolaclave.cl/",
        "pais": "cl"
    },
    "radio-maria-chile": {
        "nombre": "Radio María Chile",
        "yt_id": "UClMwb2kCYemWyDIZ2dYttKA",
        "fuente": "https://radiolaclave.cl/",
        "pais": "cl"
    },
    "prensa-presidencia": {
        "nombre": "Prensa Presidencia",
        "iframe_url": "https://mdstrm.com/live-stream/6239f6d008e7ac488826f237?autoplay=false",
        "fuente": "https://prensa.presidencia.cl/streaming.aspx",
        "pais": "cl"
    },
    "derechofacil-tw": {
        "nombre": "DerechoFacil",
        "iframe_url": "https://player.twitch.tv/?channel=derechofacil&parent=alplox.github.io",
        "fuente": "https://www.twitch.tv/derechofacil",
        "pais": "cl"
    },
    "copano": {
        "nombre": "Nicolas Copano",
        "yt_id": "UCVTL17ftpqx3lQ_IaGUNgSg",
        "fuente": "https://www.twitch.tv/copano",
        "pais": "cl"
    },
    "copano": {
        "nombre": "Nicolas Copano",
        "iframe_url": "https://player.twitch.tv/?channel=copano&parent=alplox.github.io",
        "fuente": "https://www.twitch.tv/copano",
        "pais": "cl"
    },
    "arab-tv": {
        "nombre": "ARAB TV",
        "m3u8_url": "https://livefocamundo.com:8081/arabtv/index.m3u8",
        "fuente": "https://www.arabtv.cl/",
        "pais": "cl"
    },
    "arica-tv": {
        "nombre": "Arica TV",
        "iframe_url": "https://arica.tv/envivo/",
        "fuente": "https://arica.tv/envivo/",
        "pais": "cl"
    },
    "estacion-tv": {
        "nombre": "Estaciontv TV",
        "iframe_url": "https://arica.tv/envivo/",
        "fuente": "https://www.estaciontv.cl/site/",
        "pais": "cl"
    },
    "tv-telenorte": {
        "nombre": "TV Telenorte",
        "m3u8_url": "https://stream.wifiexpert.cl/telenorte/canal-1/playlist.m3u8",
        "fuente": "https://www.telenorte.cl/",
        "pais": "cl"
    },
    "tv-rtctelevision": {
        "nombre": "TV Rtctelevision",
        "iframe_url": "https://stream.skarnetchile.com/live-stream-video-widget/rtciquique",
        "fuente": "https://www.rtctelevision.cl/",
        "pais": "cl"
    },
    "tv-canaltv8": {
        "nombre": "TV canaltv8",
        "m3u8_url": "https://panel.tvstream.cl:1936/8032/8032/playlist.m3u8",
        "fuente": "https://www.canaltv8.cl/",
        "pais": "cl"
    },
    "tv-temuco": {
        "nombre": "TV Temuco",
        "m3u8_url": "https://vdo.streaming-chile.com/p/3994/live/temucotelevisionlive.m3u8",
        "fuente": "https://temucotelevision.cl/web/",
        "pais": "cl"
    },
    "tv-canal5": {
        "nombre": "TV canal5",
        "m3u8_url": "https://stmv5.voxtvhd.com.br/canal5/canal5/playlist.m3u8",
        "fuente": "https://canal5.cl/wp/",
        "pais": "cl"
    },
    "tv-vision": {
        "nombre": "TV vision",
        "m3u8_url": "https://5eaccbab48461.streamlock.net:1936/8260/8260/playlist.m3u8",
        "fuente": "https://visiontv.cl/",
        "pais": "cl"
    },
    "tv-canal11aysen": {
        "nombre": "TV canal11aysen",
        "iframe_url": "https://cdn.jwplayer.com/players/2R4TGXTm-InE6g9DY.html",
        "fuente": "https://canal11aysen.cl/",
        "pais": "cl"
    },
    "tv-sur": {
        "nombre": "TV SUR",
        "iframe_url": "https://rudo.video/live/surtv",
        "fuente": "https://www.surtv.cl/",
        "pais": "cl"
    },
    "tv-canalsurpatagonia": {
        "nombre": "TV canalsurpatagonia",
        "iframe_url": "https://cdn.jwplayer.com/players/CvGZdlJl-InE6g9DY.html",
        "fuente": "https://www.canalsurpatagonia.cl/",
        "pais": "cl"
    },
    "tv-sensacioncosta": {
        "nombre": "TV canasensacioncosta",
        "iframe_url": "https://tv.clientetvstudio.net/hybrid-stream-video-widget/tvcosta2",
        "fuente": "https://sensacioncosta.cl/",
        "pais": "cl"
    },
    "tv-milodoncomunicaciones": {
        "nombre": "tv milodoncomunicaciones",
        "iframe_url": "https://videosenlared.fullstreaming.ar/live-stream-video-widget/ynhpdikj?autoplay=1",
        "fuente": "https://milodoncomunicaciones.com/",
        "pais": "cl"
    },
    "tv-tne": {
        "nombre": "TV tne",
        "iframe_url": "https://cdn.jwplayer.com/players/HBcpA9gx-xpHT0aWt.html",
        "fuente": "https://www.tnetv.cl/",
        "pais": "cl"
    },
    "tv-sabrosonafm": {
        "nombre": "tv sabrosonafm",
        "iframe_url": "https://samson.streamerr.co/VideoPlayer/sabrosonavideo?autoplay=1",
        "fuente": "https://sabrosonafm.cl/",
        "pais": "cl"
    },
    "tv-tvn3": {
        "nombre": "tv tvn3",
        "iframe_url": "https://mdstrm.com/live-stream/5653641561b4eba30a7e4929?jsapi=true&autoplay=false&player=57f40bb4dc5b9f3075c49cfe&custom.ui=%2F317342475%2Ftvn&custom.tvn_demo=&custom.tvn_tipo=EnVivo&custom.tvn_seccion=senal-en-vivo&custom.tvn_articulo=5653641561b4eba30a7e4929&custom.tvn_tags=",
        "fuente": "https://www.tvn.cl/tvn3",
        "pais": "cl"
    },
    "tv-calderavision": {
        "nombre": "TV calderavision",
        "iframe_url": "https://streaming10.zglobalhost.com:2020/VideoPlayer/frknrusdct?autoplay=1",
        "fuente": "https://calderavision.cl/",
        "pais": "cl"
    },
    "tv-lachilena": {
        "nombre": "TV lachilena",
        "iframe_url": "https://vdochile.com/hybrid-stream-video-widget/jeubuffn",
        "fuente": "https://lachilena.tutv.cl/",
        "pais": "cl"
    },
    "tv-terror": {
        "nombre": "tv terror",
        "m3u8_url": "https://tv.streaming-chile.com:1936/8140/8140/playlist.m3u8",
        "fuente": "https://latinartv.com/emisoras/terror-tv",
        "pais": "cl"
    },
    "tv-cine": {
        "nombre": "tv cine",
        "m3u8_url": "https://tv.streaming-chile.com:1936/8142/8142/playlist.m3u8",
        "fuente": "https://latinartv.com/emisoras/cine",
        "pais": "cl"
    },
    "tv-moni": {
        "nombre": "tv moni",
        "m3u8_url": "https://stream.skarnetchile.com:3817/live/monitvlive.m3u8",
        "fuente": "https://monitv.net/",
        "pais": "cl"
    },
    "tv-lachilena": {
        "nombre": "tv lachilena",
        "iframe_url": "https://vdochile.com/hybrid-stream-video-widget/jeubuffn",
        "fuente": "https://lachilena.tutv.cl/",
        "pais": "cl"
    },
    "tv-portalfoxmix": {
        "nombre": "tv portalfoxmix",
        "m3u8_url": "https://panel.tvstream.cl:1936/8040/8040/playlist.m3u8",
        "fuente": "https://www.portalfoxmix.cl/web/",
        "pais": "cl"
    },
    "tv-portalfoxmix": {
        "nombre": "tv portalfoxmix",
        "m3u8_url": "https://panel.tvstream.cl:1936/8040/8040/playlist.m3u8",
        "fuente": "https://www.portalfoxmix.cl/web/",
        "pais": "cl"
    },
     "tv-portalfoxmix": {
        "nombre": "tv portalfoxmix",
        "iframe_url": "https://playerv.logicahost.com.br/video/retroplustv/3/false/false/ZG1sa1pXOHdOaTVzYjJkcFkyRm9iM04wTG1OdmJTNWljZz09K1o=/16:9//nao/",
        "fuente": "https://www.portalfoxmix.cl/web/",
        "pais": "cl"
    },
    "tv-portalfoxmix": {
        "nombre": "tv portalfoxmix",
        "iframe_url": "https://playerv.logicahost.com.br/video/retroplussenal2/3/false/false/ZG1sa1pXOHdOaTVzYjJkcFkyRm9iM04wTG1OdmJTNWljZz09K1o=/16:9//nao/",
        "fuente": "https://retroplustv.com/",
        "pais": "cl"
    },
    "tv-portalfoxmix": {
        "nombre": "tv portalfoxmix",
        "iframe_url": "https://playerv.logicahost.com.br/video/retroplussenal3/3/false/false/Wkcxc2ExcFhPSGRPYVRWellqSmtjRmt5Um05aU0wNHdURzFPZG1KVE5XbGpaejA5KzM=/16:9//nao/",
        "fuente": "https://retroplustv.com/",
        "pais": "cl"
    },
    "TV-benfertv": {
        "nombre": "TV benfertv",
        "iframe_url": "https://playerv.voxtvhd.com.br/video/benfertv/3/true/true/VjFod1QxVXlVa2hWYmtaWVYwWmFjbGxzVW5KTlJuQkdZVWRHYVUxWVFrVlViR1IzWVZVeGNWRnFSbGhXZWxaTFZVWkZPVkJUYzNvPSta/16:9/nocover/nao",
        "fuente": "https://benfertv.cl//",
        "pais": "cl"
    },
// ARGENTINA
    "tn": {
        "nombre": "Todonoticias",
        "yt_id": "UCj6PcyLvpnIRT_2W_mwa9Aw",
        "pais": "ar"
    },
    "c5n": {
        "nombre": "C5N",
        "yt_id": "UCFgk2Q2mVO1BklRQhSv6p0w",
        "pais": "ar"
    },
    "net-tv": {
        "nombre": "Net TV",
        "iframe_url": "https://rudo.video/live/nettv?volume=0&mute=1",
        "fuente": "https://www.canalnet.tv/page/senal-en-vivo",
        "pais": "ar"
    },
    "tv-publica-arg": {
        "nombre": "Televisión Pública",
        "yt_id": "UCs231K71Bnu5295_x0MB5Pg",
        "pais": "ar"
    },
    "cronica-tv": {
        "nombre": "Crónica TV",
        "yt_id": "UCT7KFGv6s2a-rh2Jq8ZdM1g",
        "pais": "ar"
    },
    "la-nacion": {
        "nombre": "LA NACION",
        "yt_id": "UCba3hpU7EFBSk817y9qZkiA",
        "pais": "ar"
    },
    "canal-26": {
        "nombre": "Canal 26",
        "yt_id": "UCrpMfcQNog595v5gAS-oUsQ",
        "pais": "ar"
    },
    "america-tv": {
        "nombre": "América TV",
        "iframe_url": "https://vmf.edge-apps.net/embed/live.php?streamname=americahls-100056&autoplay=false",
        "fuente": "https://www.americatv.com.ar/vivo",
        "pais": "ar"
    },
    "america-tv": {
        "nombre": "América TV",
        "yt_id": "UC6NVDkuzY2exMOVFw4i9oHw",
        "fuente": "https://www.americatv.com.ar/vivo",
        "pais": "ar"
    },
    "net-tv": {
        "nombre": "Net TV",
        "iframe_url": "https://rudo.video/live/nettv?volume=0&mute=1",
        "fuente": "https://www.canalnet.tv/page/senal-en-vivo",
        "pais": "ar"
    },
    "tv-publica-arg": {
        "nombre": "Televisión Pública",
        "yt_id": "UCs231K71Bnu5295_x0MB5Pg",
        "fuente": "https://www.tvpublica.com.ar/",
        "pais": "ar"
    },
    "tv-publica-arg1": {
        "nombre": "Televisión Pública1",
        "m3u8_url": "https://cntlnk-main-edge-access.secure.footprint.net/entrypoint/c7_vivo01_dai_source-20001_all.m3u8",
        "fuente": "https://www.tvpublica.com.ar/",
        "pais": "ar"
    },
    "tv-publica-arg2": {
        "nombre": "Televisión Pública2",
        "iframe_url": "https://television-libre.online/html/fl2/?get=Q2FuYWw3",
        "fuente": "https://television-libre.online/en-vivo/tv-publica/",
        "pais": "ar"
    },
    "cronica-tv": {
        "nombre": "Crónica TV",
        "yt_id": "UCT7KFGv6s2a-rh2Jq8ZdM1g",
        "fuente": "https://www.cronica.com.ar/cronica-en-vivo/",
        "pais": "ar"
    },
    "cronica-tv1": {
        "nombre": "Crónica TV1",
        "iframe_url": "https://vmf.edge-apps.net/embed/live.php?streamname=cronicatv_video1-100044&autoplay=true",
        "fuente": "https://www.cronica.com.ar/cronica-en-vivo/",
        "pais": "ar"
    },
    "el-siete-tv": {
        "nombre": "El Siete TV",
        "iframe_url": "UC64ZNqX0FQHabP8iIkmnR3A",
        "fuente": "https://www.elsietetv.com.ar/",
        "pais": "ar"
    },
    "el-siete-tv1": {
        "nombre": "El Siete TV1",
        "iframe_url": "https://www.youtube.com/embed/Vh8xmLBJtR8?autoplay=1&controls=0&disablekb=1&playsinline=1&cc_load_policy=0&cc_lang_pref=auto&widget_referrer=https%3A%2F%2Fwww.elsietetv.com.ar%2F&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&customControls=true&noCookie=false&enablejsapi=1&origin=https%3A%2F%2Fwww.elsietetv.com.ar&widgetid=1",
        "fuente": "https://www.elsietetv.com.ar/",
        "pais": "ar"
    },
    "a24": {
        "nombre": "A24",
        "yt_id": "UCR9120YBAqMfntqgRTKmkjQ",
        "fuente": "https://www.a24.com/vivo",
        "pais": "ar"
    },
    "a24-1": {
        "nombre": "A24 1",
        "iframe_url": "https://vmf.edge-apps.net/embed/live.php?streamname=a24-100056&autoplay=false",
        "fuente": "https://www.a24.com/vivo",
        "pais": "ar"
    },
    "la-nacion": {
        "nombre": "La Nacion",
        "yt_id": "UCba3hpU7EFBSk817y9qZkiA",
        "fuente": "https://www.lanacion.com.ar/",
        "pais": "ar"
    },
    "ip-digital0": {
        "nombre": "Información Periodistica",
        "iframe_url": "https://player.twitch.tv/?channel=ip_noticias&parent=ipnoticias.ar",
        "fuente": "https://ip.digital/vivo",
        "pais": "ar"
    },
    "ip-digita-l": {
        "nombre": "Información Periodistica 1",
        "yt_id": "UC1bBjOZieJWHbsFA0LwjjJA",
        "fuente": "https://ip.digital/vivo",
        "pais": "ar"
    },
     "extra-tv": {
        "nombre": "EXTRA TV",
        "yt_id": "UCe22LRtJ6sAx3nn2b0SzuRQ",
        "fuente": "https://www.canalextra.com.ar/",
        "pais": "ar"
    },
    "cn5": {
        "nombre": "CN5",
        "yt_id": "UCFgk2Q2mVO1BklRQhSv6p0w",
        "fuente": "https://www.c5n.com/",
        "pais": "ar"
    },
     "canal-22": {
        "nombre": "cana l22",
        "iframe_url": "https://videocloud.instream.audio:2000/VideoPlayer/canal22?autoplay=1",
        "fuente": "https://www.canal22web.com/",
        "pais": "ar"
    },
    "el-9": {
        "nombre": "EL 9",
        "iframe_url": "https://player.twitch.tv/?channel=elnuevevivo&parent=www.elnueve.com.ar",
        "fuente": "https://www.elnueve.com.ar/en-vivo",
        "pais": "ar"
    },
    "el-9-tv": {
        "nombre": "EL 9 TV",
        "iframe_url": "https://playerssl.cdnmedia.tv/embed/20ee166d",
        "fuente": "https://el9nou.cat/el9tv/#google_vignette",
        "pais": "ar"
    },
    "Cadena3-tv": {
        "nombre": "Cadena3 TV",
        "yt_id": "UCNxohbqfDp8YxW_Mji2XMHA",
        "fuente": "https://www.cadena3.com/",
        "pais": "ar"
    },
    "El-Destape": {
        "nombre": "El Destape",
        "iframe_url": "https://www.youtube.com/embed/e94jKJSltu0?autoplay=1&mute=1",
        "fuente": "https://www.eldestapeweb.com/",
        "pais": "ar"
    },
    "Radiomitre-tv": {
        "nombre": "Radiomitre Tv",
        "iframe_url": "UCYvINPByAdCcpA0sWrF3I_w",
        "fuente": "https://www.youtube.com/@Radiomitre",
        "pais": "ar"
    },
    "canal-26": {
        "nombre": "Canal 26",
        "yt_id": "UCrpMfcQNog595v5gAS-oUsQ",
        "fuente": "https://www.diario26.com/canal26_en_vivo",
        "pais": "ar"
    },
    "canal26": {
        "nombre": "Canal26",
        "iframe_url": "https://www.youtube.com/embed/live_stream?channel=UCrpMfcQNog595v5gAS-oUsQ&enablejsapi=1&origin=https%3A%2F%2Fwww.canal26.com",
        "fuente": "https://www.diario26.com/canal26_en_vivo",
        "pais": "ar"
    },
// COLOMBIA
     "el-tiempo": {
        "nombre": "EL TIEMPO",
        "yt_id": "UCe5-b0fCK3eQCpwS6MT0aNw",
        "pais": "co"
    },
    "noti-caracol": {
        "nombre": "Noticias Caracol",
        "yt_id": "UC2Xq2PK-got3Rtz9ZJ32hLQ",
        "fuente": "https://www.caracoltv.com/senal-vivo",
        "pais": "co"
    },
    "red-mas-noticias": {
        "nombre": "RED MÁS Noticias",
        "yt_id": "UCpcvsK0UAI3MIHsjjj3CgMg",
        "fuente": "https://redmas.com.co/senal-en-vivo/",
        "pais": "co"
    },
// PERU
    "tv-peru": {
        "nombre": "TVPerú Noticias",
        "yt_id": "UCkZCoc42IipR1ucqJmIehsA",
        "pais": "pe"
    },
    "tv-peru-HD": {
        "nombre": "Tv Perú HD",
        "iframe_url": "https://iblups.com/e_tvperuHD",
        "fuente": "https://www.tvperu.gob.pe/play",
        "pais": "pe"
    },
    "tv-peru-73": {
        "nombre": "Tv Perú 73",
        "iframe_url": "https://iblups.com/e_tvperu73",
        "fuente": "https://ntvperu.pe/senal-en-vivo/",
        "pais": "pe"
    },
    "tv-peru-72": {
        "nombre": "Tv Perú 72",
        "iframe_url": "https://iblups.com/e_tvperu72",
        "fuente": "https://ntvperu.pe/senal-en-vivo/",
        "pais": "pe"
    },
    "panamericana-tv": {
        "nombre": "Panamericana TV",
        "iframe_url": "https://geo.dailymotion.com/player/x5poh.html?video=x774s7s&autoplay=true&volume=0",
        "fuente": "https://panamericana.pe/tvenvivo",
        "pais": "pe"
    },
    "onda-digital-tv": {
        "nombre": "Onda Digital TV",
        "m3u8_url": "https://v4.tustreaming.cl:443/odtvgo/index.m3u8",
        "fuente": "https://ondadigitaltv.com",
        "pais": "pe"
    },
    "onda-digital-tv-2": {
        "nombre": "Onda Digital TV 2",
        "m3u8_url": "https://tv.ondadigital.pe:1936/ondatv2/ondatv2/playlist.m3u8",
        "fuente": "https://ondadigitaltv.com",
        "pais": "pe"
    },
    "la-republica": {
        "nombre": "La República",
        "yt_id": "UC-B7Xv56uNRDkj0vC3QW8Cg",
        "pais": "pe"
    },
    "willax": {
        "nombre": "Willax",
        "iframe_url": "https://geo.dailymotion.com/player/x5poh.html?video=x7x4dgx&autoplay=true&volume=0",
        "fuente": "https://willax.tv/en-vivo/",
        "pais": "pe"
    },
    "latina-noticias": {
        "nombre": "Latina Noticias",
        "yt_id": "UCpSJ5fGhmAME9Kx2D3ZvN3Q",
        "pais": "pe"
    },
    "ovacion-tv": {
        "nombre": "Radio Ovación TV",
        "m3u8_url": "https://5c3fb01839654.streamlock.net:1963/iptvovacion1/liveovacion1tv/playlist.m3u8",
        "fuente": "https://ovacion.pe/radio",
        "pais": "pe",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "san-borja": {
        "nombre": "Radio San Borja Tv",
        "m3u8_url": "https://5c3fb01839654.streamlock.net:1963/iptvsanborja/livesanborjatv/playlist.m3u8",
        "fuente": "https://radiosanborjatv.com/",
        "pais": "pe",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "radio-onda-digital": {
        "nombre": "Radio Onda Digital",
        "m3u8_url": "https://tv.ondadigital.pe:1936/ondatv2/ondatv2/playlist.m3u8",
        "fuente": "https://www.ondadigital.pe/",
        "pais": "pe",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
    "radio-tropical": {
        "nombre": "Radio Tropical",
        "m3u8_url": "https://videoserver.tmcreativos.com:19360/raditropical/raditropical.m3u8",
        "fuente": "https://radiotropical.pe/",
        "pais": "pe",
        "alt_icon": "<i class='bi bi-boombox'></i>"
    },
// FRANCIA        
    'euronews-esp': {
        'nombre': 'euronews (Español)',
        'yt_id': 'UCyoGb3SMlTlB8CLGVH4c8Rw',
        'pais': 'fr'
    },
    "": {
        "nombre": "",
        "iframe_url": "",
        "fuente": "",
        "pais": "fr"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    'euronews-eng': {
        'nombre': 'euronews (English)',
        'yt_id': 'UCSrZ3UV4jOidv8ppoVuvW9Q',
        'pais': 'fr'
    },
    "": {
        "nombre": "",
        "iframe_url": "",
        "fuente": "",
        "pais": "fr"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    'euronews-eng-2': {
        'nombre': 'euronews (English) 2',
        'm3u8_url': 'https://rakuten-euronews-1-gb.samsung.wurl.com/manifest/playlist.m3u8',
        'fuente': 'https://www.euronews.com/live',
        'pais': 'fr'
    },
    "": {
        "nombre": "",
        "iframe_url": "",
        "fuente": "",
        "pais": "fr"
        "alt_icon": "<i class='bi bi-boombox'></i>
    },
    'euronews-rus': {
        'nombre': 'euronews Русский',
        'yt_id': 'UCFzJjgVicCtFxJ5B0P_ei8A',
        'pais': 'fr'
    },
    'euronews-hun': {
        'nombre': 'euronews (magyarul)',
        'yt_id': 'UC4Ct8gIf9f0n4mdyGsFiZRA',
        'pais': 'fr'
    },
    'france-24-esp': {
        'nombre': 'FRANCE 24 Español',
        'yt_id': 'UCUdOoVWuWmgo1wByzcsyKDQ',
        'pais': 'fr'
    },
    'france-24-eng': {
        'nombre': 'FRANCE 24 English',
        'yt_id': 'UCQfwfsi5VrQ8yKZ-UWmAEFg',
        'pais': 'fr'
    },
    'france-24-fra': {
        'nombre': 'FRANCE 24 French',
        'm3u8_url': 'https://static.france24.com/live/F24_FR_HI_HLS/live_tv.m3u8',
        'fuente': 'https://www.france24.com/fr/direct',
        'pais': 'fr'
    },
    'france-info': {
        'nombre': 'franceinfo',
        'yt_id': 'UCO6K_kkdP-lnSCiO3tPx7WA',
        'pais': 'fr'
    },
    'lci': {
        'nombre': 'LCI',
        'm3u8_url': 'https://lci-hls-live-ssl.tf1.fr/lci/1/hls/live_2328.m3u8',
        'fuente': 'https://www.tf1info.fr/direct/',
        'pais': 'fr'
    },
// ALEMANIA
    'dw-español': {
        'nombre': 'DW Español',
        'm3u8_url': 'https://dwamdstream104.akamaized.net/hls/live/2015530/dwstream104/stream03/streamPlaylist.m3u8',
        'pais': 'de'
    },
    'dw-deutsch': {
        'nombre': 'DW Deutsch',
        'yt_id': 'UCMIgOXM2JEQ2Pv2d0_PVfcg',
        'pais': 'de'
    },
    'dw-news': {
        'nombre': 'DW News',
        'yt_id': 'UCknLrEdhRCp1aegoMqRaCZg',
        'pais': 'de'
    },
    'dw-arabic': {
        'nombre': 'DW عربية',
        'yt_id': 'UC30ditU5JI16o5NbFsHde_Q',
        'pais': 'de'
    },
    'welt': {
        'nombre': 'WELT',
        'yt_id': 'UCZMsvbAhhRblVGXmEXW8TSA',
        'pais': 'de'
    },
// RUSIA
    '5-канал': {
        'nombre': '5 канал',
        'yt_id': 'UCkyrSWEcjZKpIwMxiPfOcgg',
        'pais': 'ru'
    },
    'Москва-24': {
        'nombre': 'Москва 24',
        'yt_id': 'UCIme7og-uTpdRXRgm0zzA2A',
        'pais': 'ru'
    },
    'Россия-24': {
        'nombre': 'Россия 24',
        'iframe_url': 'https://ok.ru/videoembed/3574052691599?nochat=1&autoplay=1',
        'fuente': 'https://xn--b1agj9af.xn--80aswg/video/rossija-24/',
        'pais': 'ru'
    },
    'РБК': {
        'nombre': 'РБК',
        'yt_id': 'UCWAK-dRtTEjnQnD96L6UMsQ',
        'pais': 'ru'
    },
    'RT-america': {
        'nombre': 'RT America',
        'iframe_url': 'https://actualidad.rt.com/live-embed',
        'pais': 'ru'
    },
    'RT-arabic': {
        'nombre': 'RT Arabic',
        'iframe_url': 'https://rutube.ru/play/embed/1bf2ee9dc3e20b4cb5a7ed4833bd7cb2',
        'pais': 'ru'
    },
    'RT-español': {
        'nombre': 'RT en Español',
        'iframe_url': 'https://actualidad.rt.com/live-embed',
        'pais': 'ru'
    },
    'RT-vivo': {
        'nombre': 'RT en vivo',
        'iframe_url': 'UCEIhICHOQOonjE6V0SLdrHQ',
        'pais': 'ru'
    },
    'RT-france': {
        'nombre': 'RT France',
        'yt_id': 'UCqEVwTnDzlzKOGYNFemqnYA',
        'pais': 'ru'
    },
    'RT-news': {
        'nombre': 'RT News',
        'yt_id': 'UCpwvZwUam-URkxB7g4USKpg',
        'pais': 'ru'
    },
    'RT-uk': {
        'nombre': 'RT UK',
        'yt_id': 'UC_ab7FFA2ACk2yTHgNan8lQ',
        'pais': 'ru'
    },
    'Телеканал-Дождь': {
        'nombre': 'Телеканал Дождь',
        'yt_id': 'UCdubelOloxR3wzwJG9x8YqQ',
        'pais': 'ru'
    },
    'yкраїна-24': {
        'nombre': 'Україна 24',
        'yt_id': 'UCMp5Buw-6LpbbV9r9Sl_5yg',
        'pais': 'ru'
    },
    '1tv': {
        'nombre': '1TV',
        'iframe_url': 'https://static.1tv.ru/eump/embeds/interactive.html?__paranja=yes&embed=..%2Fembeds%2F1tv_live.html&start=auto&muted=no&titleEnabled=yes&interactive=yes&embed_id=aca9762ad9b2e1633c4047c8',
        'fuente': 'https://www.1tv.ru/live',
        'pais': 'ru'
    },
    '24tv': {
        'nombre': '24TV',
        'iframe_url': 'https://rutube.ru/play/embed/261339ca4f1396ea0271d07364bd99dd',
        'fuente': 'https://crimea24.tv/broadcasting/',
        'pais': 'ru'
    },
    'Current-Time-TV': {
        'nombre': 'Current Time TV',
        'iframe_url': 'https://www.currenttime.tv/embed/player/1/92.html?type=video',
        'fuente': 'https://www.currenttime.tv/live/video/92',
        'pais': 'ru'
    },
    'm24': {
        'nombre': 'M24',
        'iframe_url': 'https://www.m24.ru/tv',
        'fuente': 'https://www.m24.ru/live',
        'pais': 'ru'
    },
    'ntv': {
        'nombre': 'NTV',
        'm3u8_url': 'https://cdn2.ntv.ru/ntv0_hd/tracks-v5a1/rewind-7150.m3u8',
        'fuente': 'https://www.ntv.ru/air/ntv/',
        'pais': 'ru'
    },
    'rbc': {
        'nombre': 'RBC',
        'm3u8_url': 'https://online-video.rbc.ru/online/rbctvhd.m3u8',
        'fuente': 'https://tv.rbc.ru/streams/',
        'pais': 'ru'
    },
    'ren': {
        'nombre': 'REN',
        'iframe_url': 'https://player.mediavitrina.ru/rentv/rentv_web/player.html',
        'fuente': 'https://ren.tv/live',
        'pais': 'ru'
    },
    'rtv': {
        'nombre': 'RTV',
        'm3u8_url': 'https://hugh.cdn.rumble.cloud/live/hr6yv36f/slot-4/mxtm-wdfe_1080p/chunklist_DVR.m3u8',
        'fuente': 'https://rumble.com/v35waq4-rt-news-livestream-247.html',
        'pais': 'ru'
    },
    'rtrplaneta': {
        'nombre': 'RTRPlaneta',
        'iframe_url': 'https://player.smotrim.ru/iframe/live/id/63251/showZoomBtn/false/isPlay/true/mute/true/sid/smotrim_rtr/',
        'fuente': 'https://vgtrk.ru/rtrplaneta',
        'pais': 'ru'
    },
    'POCCNЯ1': {
        'nombre': 'POCCNЯ1',
        'iframe_url': 'https://player.smotrim.ru/iframe/live/id/63254/showZoomBtn/false/isPlay/true/mute/true/sid/smotrim_r1/',
        'fuente': 'https://smotrim.ru/live/63254',
        'pais': 'ru'
    },
    'MIR': {
        'nombre': 'MIR',
        'iframe_url': 'https://player.mediavitrina.ru/mir_v2/mir/smotrim_web/player.html',
        'fuente': 'https://smotrim.ru/channel/253',
        'pais': 'ru'
    },
    'TBU': {
        'nombre': 'TBU',
        'iframe_url': 'https://www.tvc.ru/channel/onairiframe/',
        'fuente': 'https://www.tvc.ru/channel/onair',
        'pais': 'ru'
    },
    'tvrain': {
        'nombre': 'TVRain',
        'm3u8_url': 'https://wl.tvrain.tv/transcode/ngrp:ses_all/playlist.m3u8',
        'fuente': 'https://tvrain.tv/live/',
        'pais': 'ru'
    },
    'soyuz': {
        'nombre': 'Soyuz',
        'iframe_url': 'https://playercdn.cdnvideo.ru/aloha/players/tvsoyuz_player.html',
        'fuente': 'https://tv-soyuz.ru/tvprogramma',
        'pais': 'ru'
    },
    'channel-8': {
        'nombre': 'channel 8',
        'm3u8_url': 'https://v4.proofix.ru/8tv-europe/index.m3u8',
        'fuente': 'https://vipotv.com/channel-8/',
        'pais': 'ru'
    },
    'Zvezda': {
        'nombre': 'Zvezda',
        'iframe_url': 'https://rutube.ru/play/embed/5ab908fccfac5bb43ef2b1e4182256b0',
        'fuente': 'https://www.livehdtv.net/zvezda-zvezda-live-stream/',
        'pais': 'ru'
    },
    'iz-ru': {
        'nombre': 'Iz Ru',
        'iframe_url': 'https://www.livehdtv.net/yayin/?kanal=512&yayin=&guvenlik=$2y$10$fDXytyU.EQfeckWFQQwIfeqf2FyUkYCzCslMPDQQIAtGcTE.pUjLG',
        'fuente': 'https://www.livehdtv.net/iz-ru-live-stream-russia/',
        'pais': 'ru'
    },
// UCRANIA
    '24-Канал-онлайн': {
        'nombre': '24 Канал онлайн',
        'yt_id': 'UCja992VI_u2e52c9FHQXw5A',
        'pais': 'ua'
    },
    '34-телеканал': {
        'nombre': '34 телеканал',
        'yt_id': 'UCAxGITqXFNmV7PNCU82D_MA',
        'pais': 'ua'
    },
    'Апостроф-TV': {
        'nombre': 'Апостроф TV',
        'yt_id': 'UC0lnIB2qcArjFJPtq79WGZA',
        'pais': 'ua'
    },
    'FREEДОМ': {
        'nombre': 'UA:FREEДОМ',
        'yt_id': 'UCVEaAWKfv7fE1c-ZuBs7TKQ',
        'pais': 'ua'
    },
    'PJ-Masks': {
        'nombre': 'PJ Masks',
        'yt_id': 'UCY2jUnU118sVkdj2xafiJ0g',
        'pais': 'ua'
    },
    'UA-Перший': {
        'nombre': 'UA:Перший',
        'yt_id': 'UCPY6gj8G7dqwPxg9KwHrj5Q',
        'pais': 'ua'
    },
// CHINA
    'live-chino': {
        'nombre': '民視直播 FTVN Live 53',
        'yt_id': 'UClIfopQZlkkSpM1VgCFLRJA',
        'pais': 'cn'
    },
    'live-chino-2': {
        'nombre': '三立LIVE新聞',
        'yt_id': 'UC2TuODJhC03pLgd6MpWP0iw',
        'pais': 'cn'
    },
    'live-chino-3': {
        'nombre': '三立iNEWS',
        'yt_id': 'UCoNYj9OFHZn3ACmmeRCPwbA',
        'pais': 'cn'
    },
    'live-chino-4': {
        'nombre': '中視新聞 HD直播頻道',
        'yt_id': 'UCmH4q-YjeazayYCVHHkGAMA',
        'pais': 'cn'
    },
    'live-chino-5': {
        'nombre': '華視新聞 CH52',
        'yt_id': 'UCDCJyLpbfgeVE9iZiEam-Kg',
        'pais': 'cn'
    },
    'live-chino-6': {
        'nombre': '中天電視',
        'yt_id': 'UC5l1Yto5oOIgRXlI4p4VKbw',
        'pais': 'cn'
    },
    'live-chino-7': {
        'nombre': '寰宇新聞 頻道',
        'yt_id': 'UC2TuODJhC03pLgd6MpWP0iw',
        'pais': 'cn'
    },
    'thvl-8': {
        'nombre': 'THVL',
        'm3u8_url': 'http://live.tv360.vn/manifest/Vinh_Long_1_HD/playlist_1080p.m3u8',
        'fuente': 'https://www.thvli.vn/live/thvl1-hd',
        'pais': 'cn'
    },
    'cgtn-Español-8': {
        'nombre': 'CGTN Español',
        'yt_id': 'UCd94YCD7yp6d-YZSRYWyeFA',
        'pais': 'cn'
    },
    'cgtn-europe-9': {
        'nombre': 'CGTN Europe',
        'yt_id': 'UCj0TppyxzQWm9JbMg3CP8Rg',
        'pais': 'cn'
    },
    'cgtn-10': {
        'nombre': 'CGTN',
        'm3u8_url': 'https://live.cgtn.com/1000/prog_index.m3u8',
        'fuente': 'https://www.cgtn.com/',
        'pais': 'cn'
    },
// HONG KONG
    'HK-apple-daily': {
        'nombre': 'HK Apple Daily',
        'yt_id': 'UCeqUUXaM75wrK5Aalo6UorQ',
        'pais': 'hk'
    },
// JAPON
    'annnewsch': {
        'nombre': 'ANNnewsCH',
        'yt_id': 'UCGCZAYq5Xxojl_tSXcVJhiQ',
        'pais': 'jp'
    },
    'nhk-world-japan': {
        'nombre': 'NHK WORLD-JAPAN',
        'yt_id': 'UCSPEjw8F2nQDtmUKPFNF7_A',
        'pais': 'jp'
    },
    'nhk-world': {
        'nombre': 'NHK World',
        'm3u8_url': 'https://nhkworld.webcdn.stream.ne.jp/www11/nhkworld-tv/global/2003458/live.m3u8',
        'fuente': 'https://www3.nhk.or.jp/nhkworld/en/live/',
        'pais': 'jp'
    },
// COREA DEL SUR
    'mbcnews': {
        'nombre': 'MBCNEWS',
        'yt_id': 'UCF4Wxdo3inmxP-Y59wXDsFw',
        'pais': 'kr'
    },
//IRAN
    'hispantv-Español': {
        'nombre': 'Hispantv Español',
        'm3u8_url': 'https://cdnlive.presstv.ir/live/smil:live.smil/playlist.m3u8',
        'fuente': 'https://www.hispantv.com/',
        'pais': 'ir'
    },
    'hispan-tv-Español': {
        'nombre': 'Hispan tv Español',
        'fuente': 'https://odysee.com/$/embed/@hispantv:d/live:400?r=7TovasKcQTBH9z9J19ETKk1CrMRiu5WX',
        'fuente': 'https://www.hispantv.com/',
        'pais': 'ir'
    },
    'press-1': {
        'nombre': 'press 1',
        'm3u8_url': 'https://cdnlive.presstv.ir/cdnlive/smil:cdnlive.smil/playlist.m3u8',
        'fuente': 'https://www.presstv.ir/',
        'pais': 'ir'
    },
    'presstv-2': {
        'nombre': 'presstv 2',
        'fuente': 'https://odysee.com/$/embed/@PressTV:2/Live:206?r=7TovasKcQTBH9z9J19ETKk1CrMRiu5WX',
        'fuente': 'https://www.presstv.ir/',
        'pais': 'ir'
    },
    'presstv-3': {
        'nombre': 'presstv 3',
        'fuente': 'https://rumble.com/embed/v4ldkxb/?pub=14mhhj',
        'fuente': 'https://www.presstv.ir/',
        'pais': 'ir'
    },
    'iranintl': {
        'nombre': 'iranintl',
        'fuente': 'https://ott.iranintl.com/tv?lang=en#amp=1',
        'fuente': 'https://www.iranintl.com/en',
        'pais': 'ir'
    },
    'Shabakeh': {
        'nombre': 'Shabakeh',
        'fuente': 'http://www.parsatv.com/embed.php?name=Shabakeh-3&auto=false',
        'fuente': 'https://www.iranintl.com/en',
        'pais': 'ir'
    },
    'Shabakeh 1': {
        'nombre': 'Shabakeh 1',
        'm3u8_url': 'https://sportsleading.online/live/stream_1.m3u8',
        'fuente': 'https://www.parsatv.com/name=Shabakeh-3',
        'pais': 'ir'
    },
    'iFilm': {
        'nombre': 'iFilm',
        'fuente': 'https://www.parsatv.com/embed.php?name=iFilm-Persian&auto=false',
        'fuente': 'http://www.imvbox.tv/es/ifilm/live-channel/play',
        'pais': 'ir'
    },
    'irib-sahand': {
        'nombre': 'irib sahand',
        'fuente': 'https://telewebion.com/embed/live/sahand',
        'fuente': 'http://www.imvbox.tv/es/iribsahand/live-channel/play',
        'pais': 'ir'
    },
    'irib-baran': {
        'nombre': 'irib baran',
        'fuente': 'https://www.parsatv.com/embed.php?name=baran&auto=false',
        'fuente': 'http://www.imvbox.tv/es/iribbaran/live-channel/play',
        'pais': 'ir'
    },
    'irib-khorasan-ravazi': {
        'nombre': 'irib khorasan ravazi',
        'fuente': 'https://telewebion.com/embed/live/khorasanrazavi',
        'fuente': 'http://www.imvbox.tv/es/iribkhorasanravazi/live-channel/play',
        'pais': 'ir'
    },
    'irib-kordestan': {
        'nombre': 'irib kordestan',
        'fuente': 'https://ott.iranintl.com/tv?lang=en#amp=1',
        'fuente': 'http://www.imvbox.tv/es/iribkordestan/live-channel/play',
        'pais': 'ir'
    },
    'iribazarbayjan': {
        'nombre': 'iribazarbayjan',
        'fuente': 'https://telewebion.com/embed/live/azarbayjangharbi',
        'fuente': 'http://www.imvbox.tv/es/iribazarbayjan/live-channel/play',
        'pais': 'ir'
    },
    'khorasan-jonoobi': {
        'nombre': 'khorasan jonoobi',
        'fuente': 'https://telewebion.com/embed/live/khavaran',
        'fuente': 'http://www.imvbox.tv/es/khorasan-jonoobi/live-channel/play',
        'pais': 'ir'
    },
    'khorasan-shomali': {
        'nombre': 'khorasan shomali',
        'm3u8_url': 'https://ncdn.telewebion.com/atrak/live/playlist.m3u8',
        'fuente': 'http://www.imvbox.tv/es/khorasan-shomali/live-channel/play',
        'pais': 'ir'
    },
    'iribtv2': {
        'nombre': 'iribtv2',
        'fuente': 'https://telewebion.com/embed/live/tv2',
        'fuente': 'http://www.imvbox.tv/es/iribtv2/live-channel/play',
        'pais': 'ir'
    },
    'irib-tv2': {
        'nombre': 'irivb tv2',
        'fuente': 'https://sepehrtv.ir/frame/t/tv2',
        'fuente': 'https://tv2.ir/live',
        'pais': 'ir'
    },
    'iribtv1': {
        'nombre': 'iribtv1',
        'fuente': 'https://telewebion.com/embed/live/tv1',
        'fuente': 'http://www.imvbox.tv/es/iribtv1/live-channel/play',
        'pais': 'ir'
    },
    'irinn': {
        'nombre': 'irinn',
        'm3u8_url': 'https://ncdn.telewebion.com/irinn/live/playlist.m3u8',
        'fuente': 'http://www.imvbox.tv/es/irinn/live-channel/play',
        'pais': 'ir'
    },
    'varzeshtv': {
        'nombre': 'varzeshtv',
        'fuente': 'https://sepehrtv.ir/frame/t/varzesh',
        'fuente': 'https://varzeshtv.ir/live#!',
        'pais': 'ir'
    },
    'iribnasim': {
        'nombre': 'iribnasim',
        'fuente': 'https://telewebion.com/embed/live/nasim',
        'fuente': 'http://www.imvbox.tv/es/iribnasim/live-channel/play',
        'pais': 'ir'
    },
    'iribtv5': {
        'nombre': 'iribtv5',
        'fuente': 'https://telewebion.com/embed/live/tehran',
        'fuente': 'http://www.imvbox.tv/es/iribtv5/live-channel/play',
        'pais': 'ir'
    },
    'iribtamasha': {
        'nombre': 'iribtamasha',
        'fuente': 'https://telewebion.com/embed/live/hdtest',
        'fuente': 'http://www.imvbox.tv/es/iribtamasha/live-channel/play',
        'pais': 'ir'
    },
    'iranintl': {
        'nombre': 'iranintl',
        'fuente': 'http://www.parsatv.com/embed.php?name=Namayesh&auto=false',
        'fuente': 'http://www.imvbox.tv/es/iribnamayesh/live-channel/play',
        'pais': 'ir'
    },
    'iribtv4': {
        'nombre': 'iribtv4',
        'fuente': 'https://telewebion.com/embed/live/tv4',
        'fuente': 'http://www.imvbox.tv/es/iribtv4/live-channel/play',
        'pais': 'ir'
    },
// TURQUIA
    'trt-world': {
        'nombre': 'TRT World',
        'yt_id': 'UC7fWeaHhqgM4Ry-RMpM2YYw',
        'fuente': 'https://www.trtworld.com/',
        'pais': 'tr'
    },
    'BFZ-TURK': {
        'nombre': 'BFZ TURK',
        'iframe_url': 'https://www.nimo.tv/embed/5160697995',
        'fuente': 'https://bfzturk.com/',
        'pais': 'tr'
    },
    'trt-Haber': {
        'nombre': 'TRT Haber',
        'm3u8_url': 'https://tv-trthaber.medya.trt.com.tr/master.m3u8',
        'fuente': 'https://www.trthaber.com/',
        'pais': 'tr'
    },
    'CNNTURK': {
        'nombre': 'CNNTURK',
        'm3u8_url': 'https://live.duhnet.tv/S2/HLS_LIVE/cnnturknp/playlist.m3u8',
        'fuente': 'https://www.cnnturk.com/canli-yayin',
        'pais': 'tr'
    },
    'CNNTURK2': {
        'nombre': 'CNNTURK2',
        'm3u8_url': 'https://live.duhnet.tv/S2/HLS_LIVE/cnnturknp/playlist.m3u8',
        'fuente': 'https://www.cnnturk.com/canli-yayin',
        'pais': 'tr'
    },
    'NTV': {
        'nombre': 'NTV',
        'iframe_url': 'https://canlitv.center/yayin/ntv-izle-3',
        'fuente': 'https://www.ntv.com.tr/',
        'pais': 'tr'
    },
    'NTV2': {
        'nombre': 'NTV2',
        'iframe_url': 'https://canlitv.center/yayin/ntv-yt',
        'fuente': 'https://www.ntv.com.tr/',
        'pais': 'tr'
    },
    'startv': {
        'nombre': 'startv',
        'iframe_url': 'https://canlitv.center/yayin/star-tv-izle',
        'fuente': 'https://www.startv.com.tr/canli-yayin',
        'pais': 'tr'
    },
    'startv2': {
        'nombre': 'startv2',
        'iframe_url': 'https://canlitv.com/player1/index.php?id=99',
        'fuente': 'https://www.startv.com.tr/canli-yayin',
        'pais': 'tr'
    },
    'show-tv': {
        'nombre': 'show-tv',
        'iframe_url': 'https://canlitv.center/yayin/show-tv-izle',
        'fuente': 'https://www.ntv.com.tr/',
        'pais': 'tr'
    },
    'Tv8': {
        'nombre': 'Tv8',
        'iframe_url': 'https://www.canlitv.day/embed/?id=10924',
        'fuente': 'https://www.tv8.com.tr/canli-yayin',
        'pais': 'tr'
    },
    '360-tv': {
        'nombre': '360-tv',
        'iframe_url': 'https://www.canlitv.day/embed/?id=15',
        'fuente': 'https://www.tv360.com.tr/canli-yayin',
        'pais': 'tr'
    },
    '360-tv2': {
        'nombre': '360-tv2',
        'm3u8_url': 'https://turkmedya-live.ercdn.net/tv360/tv360.m3u8',
        'fuente': 'https://www.tv360.com.tr/canli-yayin',
        'pais': 'tr'
    },
    'HaberTURK': {
        'nombre': 'HaberTURK',
        'm3u8_url': 'https://haberturk.ercdn.net/channel01/channel01.m3u8',
        'fuente': 'https://www.haberturk.com/',
        'pais': 'tr'
    },
    'ATV': {
        'nombre': 'ATV',
        'm3u8_url': 'https://trkvz.daioncdn.net/atv/atv_480p.m3u8?e=1709291516&st=Zq85WDdh-nJyXTN__D0e9w&sid=673up4vgcoqb&app=d1ce2d40-5256-4550-b02e-e73c185a314e&ce=3',
        'fuente': 'https://www.atv.com.tr/canli-yayin',
        'pais': 'tr'
    },
    'KTR': {
        'nombre': 'KTR',
        'iframe_url': 'https://www.youtube.com/embed/2e0DZuMlU8k',
        'fuente': 'https://www.krttv.com.tr/',
        'pais': 'tr'
    },
    'NOW-TURK': {
        'nombre': 'NOW TURK',
        'm3u8_url': 'https://nowtv-live-ad.ercdn.net/nowtv/playlist.m3u8?st=d0k8DqkgRoO342EjNU3w3A&e=1709252808',
        'fuente': 'https://www.nowtv.com.tr/',
        'pais': 'tr'
    },
     'akittv': {
        'nombre': 'Akittv',
        'm3u8_url': 'https://akittv-live.ercdn.net/akittv/akittv.m3u8',
        'fuente': 'https://www.akittv.com.tr/canli-izle',
        'pais': 'tr'
    },
     'szctv': {
        'nombre': 'Szctv',
         'iframe_url': 'https://www.youtube.com/embed/2i8lfP9oqvk?autoplay=1&enablejsapi=1&playsinline=1',
        'fuente': 'https://www.szctv.com.tr/',
        'pais': 'tr'
    },
     'halk-tv': {
        'nombre': 'Halk tv',
        'iframe_url': 'https://www.youtube.com/embed/-HJwrahoMsQ?autoplay=1',
        'fuente': 'https://halktv.com.tr/canli-yayin',
        'pais': 'tr'
    },
    'halk-tv': {
        'nombre': 'Halk tv',
        'm3u8_url': 'https://halktv.daioncdn.net/halktv/halktv.m3u8?app=c86957d3-74a7-44da-9ad2-dc358c769609&ce=3',
        'fuente': 'https://halktv.com.tr/canli-yayin',
        'pais': 'tr'
    },
    'kanal-7': {
        'nombre': 'kanal 7',
        'm3u8_url': 'https://kanal7.daioncdn.net/kanal7/kanal7.m3u8?app=f99587ad-1637-494d-8255-da35b09d17a1&ce=3',
        'fuente': 'https://www.kanal7.com/canli-izle',
        'pais': 'tr'
    },
    'beyaz-tv': {
        'nombre': 'Beyaz-tv',
        'm3u8_url': 'https://beyaztv.daioncdn.net/beyaztv/beyaztv.m3u8?app=fcd5c66b-da9d-44ba-a410-4f34805c397d&ce=3',
        'fuente': 'https://m.beyaztv.com.tr/canli-yayin/',
        'pais': 'tr'
    },
    'fox-tv': {
        'nombre': 'Fox tv',
        'iframe_url': 'https://canlitv.com/player/index.php?id=11221',
        'fuente': 'https://canlitv.com/fox-tv',
        'pais': 'tr'
    },
    'tele1': {
        'nombre': 'Tele1',
        'iframe_url': 'https://www.youtube.com/embed/RLEKowJq14U?si=uuGw1Um14YOW9lYk',
        'fuente': 'https://canlitv.com/fox-tv',
        'pais': 'tr'
    },
    'tv24': {
        'nombre': 'tv24',
        'm3u8_url': 'https://turkmedya-live.ercdn.net/tv24/tv24.m3u8',
        'fuente': 'https://www.yirmidort.tv/canli-yayin',
        'pais': 'tr'
    },
    'a2-tv': {
        'nombre': 'a2 tv',
        'm3u8_url': 'https://trkvz.daioncdn.net/a2tv/a2tv.m3u8?ce=3&app=59363a60-be96-4f73-9eff-355d0ff2c758&st=d_r2xhHr-FkdjsZyMfAfFg&e=1709290534&gdpr=0',
        'fuente': 'https://tv8bucuk.com/tv8-5-canli-yayin',
        'pais': 'tr'
    },
// CATAR
    'al-jazeera-english': {
        'nombre': 'Al Jazeera English',
        'yt_id': 'UCNye-wNBqNL5ZzHSJj3l8Bg',
        'pais': 'qa'
    },
    'al-jazeera-english-2': {
        'nombre': 'AlJazeera Channel English 2',
        'm3u8_url': 'https://live-hls-web-aje.getaj.net/AJE/03.m3u8',
        'fuente': 'https://www.aljazeera.com/live/',
        'pais': 'qa'
    },
    'al-jazeera-arabe': {
        'nombre': 'AlJazeera Channel قناة الجزيرة',
        'yt_id': 'UCfiwzLy-8yKzIbsmZTzxDgw',
        'pais': 'qa'
    },
// SINGAPUR
    'cna': {
        'nombre': '📺 CNA',
        'yt_id': 'UC83jt4dlz1Gjl58fzQrrKZg',
        'pais': 'sg'
    },
// NIGERIA
    'news-nigeria': {
        'nombre': '📺 TVC News Nigeria',
        'yt_id': 'UCgp4A6I8LCWrhUzn-5SbKvA',
        'fuente': 'https://www.youtube.com/channel/UCgp4A6I8LCWrhUzn-5SbKvA',
        'pais': 'ng'
    },
    'Silverbird-N24Live': {
        'nombre': '📺 Silverbird N24 Live',
        'yt_id': 'UCNuPuew8lLVB3mMAm9_Qt9w',
        'fuente': 'https://www.youtube.com/@SilverbirdN24Live',
        'pais': 'ng'
    },
    'NTA-News': {
        'nombre': '📺 NTA News',
        'yt_id': 'UCLLWAXn5F415g2kNAcE_T1g',
        'fuente': 'https://www.youtube.com/channel/UCLLWAXn5F415g2kNAcE_T1g',
        'pais': 'ng'
    },
    'Atlantic-Television-(ATN)': {
        'nombre': '📺 Atlantic Television (ATN)',
        'm3u8_url': 'https://tv.ifastekpanel.com:3013/live/atntvlive.m3u8',
        'fuente': 'https://atlanticnetwork.tv/',
        'pais': 'ng'
    },
    'Rave-TV': {
        'nombre': '📺 Rave TV',
        'iframe_url': 'https://watch.avo.tv/pages/discover/e/live-tv?channel=6037efb27384c922683c7d9f',
        'fuente': 'https://atlanticnetwork.tv/',
        'pais': 'ng'
    },
    'TV360-Nigeria': {
        'nombre': '📺 TV360 Nigeria',
        'yt_id': 'UCBzu4YqGiBxBD8pq8NiBuKw',
        'fuente': 'https://www.tv360nigeria.com/',
        'pais': 'ng'
    },
    'Channels-Television': {
        'nombre': '📺 Channels Television',
        'yt_id': 'UCEXGDNclvmg6RW0vipJYsTQ',
        'fuente': 'https://www.youtube.com/@ChannelsTelevision',
        'pais': 'ng'
    },
    'Trust-TV-News': {
        'nombre': '📺 Trust TV News',
        'yt_id': 'UCTlqstA2Wrt4fimd_VWKr8g',
        'fuente': 'https://www.youtube.com/channel/UCTlqstA2Wrt4fimd_VWKr8g',
        'pais': 'ng'
    },
    'News-Central-Africa': {
        'nombre': '📺 News Central Africa',
        'yt_id': 'UCPLKy4Ypb4mfblbjJI8Aljw',
        'fuente': 'https://www.youtube.com/@NewsCentralAfrica/streams',
        'pais': 'ng'
    },
// AUSTRALIA
    'abc-news-au': {
        'nombre': '📺 ABC News AU',
        'm3u8_url': 'https://abc-iview-mediapackagestreams-2.akamaized.net/out/v1/6e1cc6d25ec0480ea099a5399d73bc4b/index.m3u8',
        'fuente': 'https://www.abc.net.au/news/',
        'pais': 'au'
    },
    'ABC-News-(Australia)': {
        'nombre': '📺 ABC News (Australia)',
        'yt_id': 'UCVgO39Bk5sMo66-6o6Spn6Q',
        'fuente': 'https://www.youtube.com/@abcnewsaustralia/streams',
        'pais': 'au'
    },
    'TVSN': {
        'nombre': '📺 TVSN',
        'yt_id': 'UCo4sch-fwKIeyzyPIWRXjdw',
        'fuente': 'https://www.youtube.com/@ItvsnAuTVSNLIVE/streams',
        'pais': 'au'
    },
    'TVSN-NOW': {
        'nombre': '📺 TVSN NOW',
        'm3u8_url': 'https://tvsnhlslivetest.akamaized.net/hls/live/2034711/TVSN-MSL4/master.m3u8',
        'fuente': 'https://www.itvsn.com.au/tvsnnow/',
        'pais': 'au'
    },
// PAKISTAN
    'bol-news': {
        'nombre': '📺 BOL News',
        'yt_id': 'UCz2yxQJZgiB_5elTzqV7FiQ',
        'fuente': 'https://www.itvsn.com.au/tvsnnow/',
        'pais': 'pk'
    },
    'SAMAA-TV': {
        'nombre': '📺 SAMAA TV',
        'yt_id': 'UCJekW1Vj5fCVEGdye_mBN6Q',
        'fuente': 'https://www.youtube.com/channel/UCJekW1Vj5fCVEGdye_mBN6Q',
        'pais': 'pk'
    },
    'BOL-News': {
        'nombre': '📺 BOL News',
        'yt_id': 'UCz2yxQJZgiB_5elTzqV7FiQ',
        'fuente': 'https://www.youtube.com/channel/UCz2yxQJZgiB_5elTzqV7FiQ',
        'pais': 'pk'
    },
    'Geo-News': {
        'nombre': '📺 Geo News',
        'yt_id': 'UC_vt34wimdCzdkrzVejwX9g',
        'fuente': 'https://www.youtube.com/@geonews/streams',
        'pais': 'pk'
    },
    'ARY-News': {
        'nombre': '📺 ARY News',
        'yt_id': 'UCMmpLL2ucRHAXbNHiCPyIyg',
        'fuente': 'https://www.youtube.com/channel/UCMmpLL2ucRHAXbNHiCPyIyg',
        'pais': 'pk'
    },
// INDIA
    'indiatv': {
        'nombre': '📺 IndiaTV',
        'yt_id': 'UCttspZesZIDEwwpVIgoZtWQ',
        'pais': 'in'
    },
    'Aaj-Tak': {
        'nombre': '📺 Aaj Tak',
        'yt_id': 'UCt4t-jeY85JegMlZ-E5UWtA',
        'pais': 'in'
    },
    'TIMES-NOW': {
        'nombre': '📺 TIMES NOW',
        'yt_id': 'UCMk9Tdc-d1BIcAFaSppiVkw',
        'pais': 'in'
    },
    'TV9-Bharatvarsh': {
        'nombre': '📺 TV9 Bharatvarsh',
        'yt_id': 'UCOutOIcn_oho8pyVN3Ng-Pg',
        'pais': 'in'
    },
    'republic-world': {
        'nombre': 'Republic World',
        'yt_id': 'UCwqusr8YDwM-3mEYTDeJHzw',
        'pais': 'in'
    },
// REINO UNIDO
    'gbnews': {
        'nombre': '📺 GBNews',
        'yt_id': 'UC0vn8ISa4LKMunLbzaXLnOQ',
        'pais': 'gb'
    },
// VARIOS ???
    'naciones-unidas': {
        'nombre': 'Naciones Unidas',
        'yt_id': 'UC5O114-PQNYkurlTg6hekZw',
    },
// MUSICA 24/7
    'lofi-girl': {
        'nombre': '🎵 Lofi Girl',
        'yt_embed': 'jfKfPfyJRdk',
        'fuente': 'https://www.youtube.com/channel/UCSJ4gkVC6NrvII8umztf0Ow'
    },
    'chillhop': {
        'nombre': '🎵 Chillhop',
        'yt_embed': '5yx6BWlEVcY',
        'fuente': 'https://www.youtube.com/channel/UCOxqgCwgOqC2lMqC5PYz_Dg'
    },
    'steezyasfuck': {
        'nombre': '🎵 Steezyasfuck',
        'yt_embed': 'KC_oey5dbmI',
        'fuente': 'https://www.youtube.com/channel/UCsIg9WMfxjZZvwROleiVsQg'
    },
    'imuc-radio-chile': {
        'nombre': '🎵 IMUC Chile',
        'yt_id': 'UCIIDtZoaK9UZi4FaGMmL_hw',
        'pais': 'cl'
    },
    'doom-radio': {
        'nombre': '🎵 Doom Radio',
        'yt_id': 'UCR2D48i5MCMYwVKbgYIAftQ'
    },
    'naxos-japan': {
        'nombre': '🎵 naxos japan',
        'yt_embed': 'qtnxR6y0sT8',
        'fuente': 'https://www.youtube.com/channel/UCwP6-81HmoDyC3nfBAyGPXQ'
    },
    'acidjazz': {
        'nombre': '🎵 AcidJazz',
        'yt_id': 'UC8cRYBn-z6y1EOUeMdJ0VHA'
    },
    'darkwave': {
        'nombre': '🎵 The 80s Guy',
        'yt_id': 'UC6ghlxmJNMd8BE_u1HR-bTg'
    },
    'the-bootleg-boy-1': {
        'nombre': '🎵 the bootleg boy',
        'yt_embed': 'bLlloaA4b4g',
        'fuente': 'https://www.youtube.com/channel/UC0fiLCwTmAukotCXYnqfj0A'
    },
    'the-bootleg-boy-2': {
        'nombre': '🎵 the bootleg boy 2',
        'yt_embed': 'Vo-2noOnBcY',
        'fuente': 'https://www.youtube.com/channel/UCwkTfp14Sj7o6q9_8ADJpnA'
    },
    'chill-with-taiki': {
        'nombre': '🎵 Chill with Taiki',
        'yt_embed': 'qH3fETPsqXU',
        'fuente': 'https://www.youtube.com/channel/UCKdURsjh1xT1vInYBy82n6g'
    },
    'abao-en-tokio': {
        'nombre': '🎵 Abao en Tokio',
        'yt_embed': 'e_Ede7tGgfA',
        'fuente': 'https://www.youtube.com/channel/UC84whx2xxsiA1gXHXXqKGOA'
    },
    'college-music': {
        'nombre': '🎵 College Music',
        'yt_embed': 'QwXHcgZUnFI',
        'fuente': 'https://www.youtube.com/channel/UCWzZ5TIGoZ6o-KtbGCyhnhg'
    },
// CAMARAS MUNDO
// Chile
    'galeria-cima': {
        'nombre': '📷 Galería CIMA',
        'yt_id': 'UC4GOcOKkEefz5NamN4WyMFg',
        'pais': 'cl'
    },
    'parquemet-cumbre': {
        'nombre': '📷 Halcón Parquemet, Cumbre',
        'iframe_url': 'https://g1.ipcamlive.com/player/player.php?alias=5a7084c9e0136&autoplay=true',
        'fuente': 'https://halcon.parquemet.cl/index.html',
        'pais': 'cl'
    },
    'parquemet-terraza': {
        'nombre': '📷 Halcón Parquemet, Terraza',
        'iframe_url': 'https://g1.ipcamlive.com/player/player.php?alias=5a7085fe914c0&autoplay=true',
        'fuente': 'https://halcon.parquemet.cl/index.html',
        'pais': 'cl'
    },
    'ledrium': {
        'nombre': '📷 Providencia, Ledrium',
        'yt_embed': 'mGxX5PfREPA',
        'fuente': 'https://www.youtube.com/channel/UCTDewuGhfwGv6JRNnqa-yXw',
        'pais': 'cl'
    },
    'muni-osorno': {
        'nombre': '📷 Municipalidad Osorno',
        'yt_id': 'UCD7sqegDNyZxmdnCj6xqH6g',
        'pais': 'cl'
    },
    'glaseado-1': {
        'nombre': '📷 glaseado.cl, Huayquique',
        'iframe_url': 'https://g3.ipcamlive.com/player/player.php?alias=huayquique&autoplay=1',
        'fuente': 'https://www.glaseado.cl/surf-cams/huayquique/',
        'pais': 'cl'
    },
    'glaseado-2': {
        'nombre': '📷 glaseado.cl, Las Urracas',
        'iframe_url': 'https://g3.ipcamlive.com/player/player.php?alias=lasurracas&autoplay=1',
        'fuente': 'https://www.glaseado.cl/surf-cams/las-urracas/',
        'pais': 'cl'
    },
    'glaseado-3': {
        'nombre': '📷 glaseado.cl, La Punta',
        'iframe_url': 'https://g3.ipcamlive.com/player/player.php?alias=lapunta&autoplay=1',
        'fuente': 'https://www.glaseado.cl/surf-cams/la-punta/',
        'pais': 'cl'
    },
// Peru
    'av-angamos': {
        'nombre': '📷 Av Angamos',
        'yt_embed': 'jQcotlKaPYY',
        'fuente': 'https://www.youtube.com/channel/UCP9nvEUj8EN-wuOQajPQbAw',
        'pais': 'pe'
    },
    'av-la-marina': {
        'nombre': '📷 Av La Marina',
        'yt_embed': 'Arq2BUHYz9Y',
        'fuente': 'https://www.youtube.com/channel/UCP9nvEUj8EN-wuOQajPQbAw',
        'pais': 'pe'
    },
//  Argentina
    'obelisco': {
        'nombre': '📷 FourSeasons BuenosAires',
        'yt_id': 'UCCkRwmztPEvut3gpsgmCmzw',
        'pais': 'ar'
    },
    'puente-gral-belgrano': {
        'nombre': '📷 SISE Argentina',
        'yt_id': 'UC2RkL2eATR1V6H8g4eNfA5Q',
        'pais': 'ar'
    },
// EEUU
    'times-square': {
        'nombre': '📷 Times Square Live 4K',
        'yt_id': 'UC6qrG3W8SMK0jior2olka3g',
        'pais': 'us'
    },
    'puente-brooklyn': {
        'nombre': '📷 St. George Tower',
        'yt_embed': 'KGuCGd726RA',
        'fuente': 'https://www.youtube.com/channel/UCp1ojgNJ8mNWdMDsdcMRA2Q',
        'pais': 'us'
    },
    'bryant-park': {
        'nombre': '📷 Bryant Park NYC',
        'yt_id': 'UC6AlfoRUeH4B1an_R5YSSTw',
        'pais': 'us'
    },
    'george-washington-bridge': {
        'nombre': '📷 Fort Lee Today On Demand',
        'yt_id': 'UChQ5P-kHBZpH20EnXm9X0YQ',
        'pais': 'us'
    },
    'washington-dc': {
        'nombre': '📷 Washington DC, US Capitol',
        'yt_embed': '_RAjp7A3VDw',
        'fuente': 'https://www.youtube.com/channel/UCRj7u6fmW8RYQl98hcwbwng',
        'pais': 'us'
    },
    'las-vegas': {
        'nombre': '📷 Las Vegas, Treasure Island',
        'yt_embed': 'CUyy8rBnuzY',
        'fuente': 'https://www.youtube.com/channel/UCRj7u6fmW8RYQl98hcwbwng',
        'pais': 'us'
    },
    'san-diego': {
        'nombre': '📷 San Diego, Down Town + Airport',
        'yt_embed': 'fcGDU86DuSo',
        'fuente': 'https://www.youtube.com/channel/UCRj7u6fmW8RYQl98hcwbwng',
        'pais': 'us'
    },
// Francia
    'eiffel-tower': {
        'nombre': '📷 Paris, Eiffel Tower',
        'yt_embed': 'iZipA1LL_sU',
        'fuente': 'https://www.youtube.com/channel/UCRj7u6fmW8RYQl98hcwbwng',
        'pais': 'fr'
    },
// UCRANIA
    'ucrania-multicam-s8': {
        'nombre': '📷 Multi-cam Ucrania, Zabby',
        'yt_id': 'UCxc2Kkmuc8-BXVEQ82ChVow',
        'pais': 'ua'
    },
    'ucrania-multicam-s9': {
        'nombre': '📷 Multi-cam Ucrania, Sloth On Meth',
        'yt_id': 'UCkO2xL-Fx_tYXXxuuAv_j6A',
        'pais': 'ua'
    },
// Japon
    'RailCam': {
        'nombre': '📷 Aoba traffics',
        'yt_id': 'UCynDLZ-YJnrMLSQvwYi-bUA'
    },
    'jerusalem': {
        'nombre': '📷 Steadycamline, Jerusalem',
        'yt_id': 'UC1byT4dOeBAZwVqQ309iAuA'
    },
    'hawaii-livecam': {
        'nombre': '📷 Aqualink Hawaii',
        'yt_id': 'UCTLF36lXVM7uiR-VolWHv0Q'
    },
    'daily-seoul': {
        'nombre': '📷 Daily Seoul Live Camera - Hangang',
        'yt_id': 'UCQKQTgZJo3PlxA-9V1Z51XA'
    },
// aleatorio
    'camaras-aleatorias': {
        'nombre': '📷 Boston and Maine Live',
        'yt_embed': 'cUk-Xvlfs1I',
        'fuente': 'https://www.youtube.com/channel/UC8gbWbcNNyb5-NIXvFklkOA'
    },
    'namibiacam': {
        'nombre': '📷 NamibiaCam',
        'yt_id': 'UC9X6gGKDv2yhMoofoeS7-Gg'
    },
// ESPACIO
    'nasa': {
        'nombre': '🔭 NASA Live',
        'yt_embed': '21X5lGlDOfg',
        'fuente': 'https://www.youtube.com/watch?v=21X5lGlDOfg'
    },
    'space-videos': {
        'nombre': '🔭 NASA ISS Live Stream',
        'yt_embed': '86YLFOog4GM',
        'fuente': 'https://www.youtube.com/watch?v=86YLFOog4GM'
    },
    'space-videos-2': {
        'nombre': '🔭 Space Videos',
        'yt_id': 'UCakgsb0w7QB0VHdnCc-OVEA'
    },
    'nasa-spaceflight': {
        'nombre': '🔭 NASASpaceflight',
        'yt_id': 'UCSUu1lih2RifWkKtDOJdsBA'
    },
    'espacio-tierra': {
        'nombre': '🔭 Earth view from ISS',
        'yt_embed': 'XBPjVzSoepo',
        'fuente': 'https://www.youtube.com/watch?v=XBPjVzSoepo'
    },
    'labpadre': {
        'nombre': '🔭 LabPadre',
        'yt_id': 'UCFwMITSkc1Fms6PoJoh1OUQ'
    },
    'spacex': {
        'nombre': '🔭 SpaceX',
        'yt_id': 'UCtI0Hodo5o5dUb67FeUjDeA'
    },
    'blue-origin': {
        'nombre': '🔭 Blue Origin',
        'yt_id': 'UCVxTHEKKLxNjGcvVaZindlg'
    },
    'virgin-galactic': {
        'nombre': '🔭 Virgin Galactic',
        'yt_id': 'UClcvOr7LV8tlJwJvkNMmnKg'
    },
// COVID
    'corona-pagina': {
        'nombre': '🦠 COVID-19 Dashboard',
        'iframe_url': 'https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6',
        'fuente': 'https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6'
    },
    'corona-live': {
        'nombre': '🦠 COVID-19 Live',
        'yt_embed': 'NMre6IAAAiU',
        'fuente': 'https://www.youtube.com/channel/UCDGiCfCZIV5phsoGiPwIcyQ'
    },
    'corona-pag-chile': {
        'nombre': '🦠 COVID-19 Chile',
        'iframe_url': 'https://bing.com/covid/local/chile',
        'fuente': 'https://bing.com/covid/local/chile'
    },
// SERIES
    'bob-ross': {
        'nombre': 'Bob Ross (Todas las Temporadas)',
        'yt_playlist': 'PLaLOVNqqD-2HgiA-GZyzcfZN9n-YelhB5',
        'fuente': 'https://www.youtube.com/channel/UCxcnsr1R5Ge_fbTu5ajt8DQ'
// EDUCATIVOS
    },
    'tv-educa-cl': {
        'nombre': '📚 TV Educa Chile',
        'm3u8_url': 'https://mdstrm.com/live-stream-playlist-v/5e74e53f1ab4eb073b19ef34.m3u8',
        'fuente': 'https://www.tvn.cl/envivo/tveducachile/',
        'pais': 'cl'
    },
    'puntaje-nacional': {
        'nombre': '📚 Puntaje Nacional Chile',
        'yt_id': 'UCCY6xIXHmGBGZUgUYxtfKSg',
        'pais': 'cl'
    },
// 🏛️ 🏛️ 🏛️ 
    'gob-cl': {
        'nombre': '🏛️ Gobierno de Chile',
        'iframe_url': 'https://mdstrm.com/live-stream/5c12a5c39e03df0795a74d3a?autoplay=true&volume=0',
        'fuente': 'https://www.gob.cl/',
        'pais': 'cl'
    },
    'tv-senado': {
        'nombre': '🏛️ TV Senado',
        'iframe_url': 'https://janus-tv.senado.cl/embed.php',
        'fuente': 'https://tv.senado.cl/',
        'pais': 'cl'
    },
    'tv-senado-2': {
        'nombre': '🏛️ TV Senado 2',
        'm3u8_url': 'https://janus-tv-ply.senado.cl/playlist/playlist.m3u8',
        'fuente': 'https://tv.senado.cl/',
        'pais': 'cl'
    },
    'tv-senado-3': {
        'nombre': '🏛️ TV Senado 3',
        'yt_id': 'UC4GJ43VNn4AYfiYa0RBCHQg',
        'pais': 'cl'
    },
    'convencion-tv': {
        'nombre': '🏛️ Convención Constitucional',
        'iframe_url': 'https://mdstrm.com/live-stream/60d476c14157440829d03cd7?autoplay=true&volume=0',
        'fuente': 'https://www.convencion.tv/',
        'pais': 'cl'
    },
    'convencion-tv-2': {
        'nombre': '🏛️ Convención Constitucional 2',
        'm3u8_url': 'https://mdstrm.com/live-stream-playlist/60d1f10fdacfa008348d71d2.m3u8',
        'fuente': 'https://www.convencion.tv/',
        'pais': 'cl'
    },
    'convencion-tv-3': {
        'nombre': '🏛️ Convención Constitucional 3',
        'yt_id': 'UCRlIWVAxQdAnCl4D4UR9r3Q',
        'pais': 'cl'
    },
    'convencion-tv-01': {
        'nombre': '🏛️ Convención Constitucional YT 01',
        'yt_id': 'UCc3koBbWMyvSyzRbG5eTgvQ',
        'pais': 'cl'
    },
    'convencion-tv-02': {
        'nombre': '🏛️ Convención Constitucional YT 02',
        'yt_id': 'UCKmKUwcjv6HJP7-z9Nnpp2w',
        'pais': 'cl'
    },
    'convencion-tv-03': {
        'nombre': '🏛️ Convención Constitucional YT 03',
        'yt_id': 'UCeIlCkkBplhU0SrWM9B7u7Q',
        'pais': 'cl'
    },
    'convencion-tv-04': {
        'nombre': '🏛️ Convención Constitucional YT 04',
        'yt_id': 'UCkMWMYCPUGzf3UPAxcIaVqA',
        'pais': 'cl'
    },
    'convencion-tv-05': {
        'nombre': '🏛️ Convención Constitucional YT 05',
        'yt_id': 'UChNeKfZ0-wwuOCyUSu6BlcA',
        'pais': 'cl'
    },
    'convencion-tv-06': {
        'nombre': '🏛️ Convención Constitucional YT 06',
        'yt_id': 'UC-HPc8CLoGRSG0dgbzZbDWA',
        'pais': 'cl'
    },
    'convencion-tv-07': {
        'nombre': '🏛️ Convención Constitucional YT 07',
        'yt_id': 'UC9p2Hsom7SXdro9FhN4K59w',
        'pais': 'cl'
    },
    'convencion-tv-08': {
        'nombre': '🏛️ Convención Constitucional YT 08',
        'yt_id': 'UCFkkF0LKUOUOcQEwG4nTrHw',
        'pais': 'cl'
    },
    'convencion-tv-09': {
        'nombre': '🏛️ Convención Constitucional YT 09',
        'yt_id': 'UCEK7dK0jllE0uXMhEQTV6og',
        'pais': 'cl'
    },
    'convencion-tv-10': {
        'nombre': '🏛️ Convención Constitucional YT 10',
        'yt_id': 'UC1qhPKBTpfhjVcTMzmM8mGw',
        'pais': 'cl'
    },
    'convencion-tv-11': {
        'nombre': '🏛️ Convención Constitucional YT 11',
        'yt_id': 'UCRVinYIynLNcn18wHjmI5Vg',
        'pais': 'cl'
    },
    'convencion-tv-12': {
        'nombre': '🏛️ Convención Constitucional YT 12',
        'yt_id': 'UCJerNR157sjR83jMChSocPQ',
        'pais': 'cl'
    },
    'convencion-tv-13': {
        'nombre': '🏛️ Convención Constitucional YT 13',
        'yt_id': 'UCxI0u9BUvXbGHrv200cgFZg',
        'pais': 'cl'
    },
    'convencion-tv-14': {
        'nombre': '🏛️ Convención Constitucional YT 14',
        'yt_id': 'UCxAECnUReRnEwkFThbjtH2Q',
        'pais': 'cl'
    },
    'convencion-tv-15': {
        'nombre': '🏛️ Convención Constitucional YT 15',
        'yt_id': 'UCTGMQgIdFvz3qlD9mKb8v9w',
        'pais': 'cl'
    },
    'tribunal-consti': {
        'nombre': '🏛️ Tribunal Constitucional',
        'yt_id': 'UCZaI-1N1oaGb-U8K2VNztjg',
        'pais': 'cl'
    },
    'poder-judicial': {
        'nombre': '🏛️ Poder Judicial',
        'yt_id': 'UCo0C1-ocUG9a0Yb3iO0V-xg',
        'pais': 'cl'
    },
    'cam-dipu-1': {
        'nombre': '🏛️ Cámara Diputados',
        'm3u8_url': 'https://camara.03.cl.cdnz.cl/camara19/live/playlist.m3u8',
        'fuente': 'http://www.cdtv.cl/',
        'pais': 'cl'
    },
    'cam-dipu-2': {
        'nombre': '🏛️ Cámara Diputados 2',
        'm3u8_url': 'https://camara.02.cl.cdnz.cl/cdndvr/live/playlist.m3u8?DVR',
        'fuente': 'http://webtv.camara.cl/',
        'pais': 'cl'
    },
    'cam-dipu-3': {
        'nombre': '🏛️ Cámara Diputados 3',
        'm3u8_url': 'https://tls-cl.cdnz.cl/camara/live/playlist.m3u8',
        'fuente': 'http://webtv.camara.cl/',
        'pais': 'cl'
    }, 
// CANALES ALTERNATIVOS CAM DIPUTADOS
    'cam-dipu': {
        'nombre': '🏛️ Cámara Diputados YT',
        'yt_id': 'UCYd5k2TyOyOmUJNx0SH17KA',
        'pais': 'cl'
    },
    'cam-dipu-01': {
        'nombre': '🏛️ Cámara Diputados YT 01',
        'yt_id': 'UCcULnWuDzgQG9yF0Dv3DIgg',
        'pais': 'cl'
    },
    'cam-dipu-03': {
        'nombre': '🏛️ Cámara Diputados YT 03',
        'yt_id': 'UCF6KgLfQqQzekn8U1DwVs9g',
        'pais': 'cl'
    },
    'cam-dipu-05': {
        'nombre': '🏛️ Cámara Diputados YT 05',
        'yt_id': 'UC0QKtI8NpeMObauDylsSUDA',
        'pais': 'cl'
    },
    'cam-dipu-06': {
        'nombre': '🏛️ Cámara Diputados YT 06',
        'yt_id': 'UCspWzpGflwb6A8PZqWw49CQ',
        'pais': 'cl'
    },
    'cam-dipu-07': {
        'nombre': '🏛️ Cámara Diputados YT 07',
        'yt_id': 'UCyVjDDBZGDywVGrpGBvGEsw',
        'pais': 'cl'
    },
    'cam-dipu-08': {
        'nombre': '🏛️ Cámara Diputados YT 08',
        'yt_id': 'UCCtDbZzh63vgU_BWHRGsbug',
        'pais': 'cl'
    },
    'cam-dipu-11': {
        'nombre': '🏛️ Cámara Diputados YT 11',
        'yt_id': 'UCYPKjGKq2yLbAnmth5rFZmQ',
        'pais': 'cl'
    },
    'cam-dipu-12': {
        'nombre': '🏛️ Cámara Diputados YT 12',
        'yt_id': 'UCVOWFY-sgbDglBsfOap9okg',
        'pais': 'cl'
    },
    'cam-dipu-13': {
        'nombre': '🏛️ Cámara Diputados YT 13',
        'yt_id': 'UC33MG3YdoQ16a8a3wODh6lw',
        'pais': 'cl'
    },
// PERU
    'congreso-peru': {
        'nombre': '🏛️ Congreso República del Perú',
        'yt_id': 'UCsKiP5cZCYh9YhPGrI6GrkQ',
        'pais': 'pe'
    },
    'justicia-tv': {
        'nombre': '🏛️ Justicia TV',
        'yt_id': 'UCwsURxTXqGqijgu98ndod3A',
        'pais': 'pe'
    }
}
