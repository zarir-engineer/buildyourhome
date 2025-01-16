# woh-haina

### ffmpeg -i "C:\Users\Asus\Downloads\IMG_0006.MOV" -vf "select=eq(n\,34)" -vframes 1 "C:\Users\Asus\Downloads\alka.png"

### ffmpeg -i "C:\Users\Asus\Downloads\alka.png" -vf scale=660:380 "C:\Users\Asus\Downloads\output_660x380.png"

### ffmpeg -loglevel error -stats -i source.video -map 0:0 -filter:v fps\=24000/1001 -c:v h264_videotoolbox -b:v 8500k -profile 3 -level 41 -coder cabac -threads 4 -allow_sw:v 1 -map 0:1 -c:a:0 copy -disposition:a:0 default -map 0:6 -c:s:0 copy -disposition:s:0 0 -metadata:g title\=“If you want file title in the metadata, goes here” -default_mode passthrough ‘outfile.mkv’

### ffmpeg -i input.mov -c:v h264_videotoolbox -b:v 1000k -c:a aac output.mp4

### https://getbootstrap.com/docs/4.0/components/modal/