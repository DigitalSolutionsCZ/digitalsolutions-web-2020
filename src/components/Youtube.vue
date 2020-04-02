<script>
const player = require('youtube-player');

const UNSTARTED = -1;
const ENDED = 0;
const PLAYING = 1;
const PAUSED = 2;
const BUFFERING = 3;
const CUED = 5;
export default {
    name: "Youtube",
    props: {
        source: String,
        playerVars: Object,
    },
    data: () => ({
        instance: {},
        events: {
            [UNSTARTED]: 'unstarted',
            [PLAYING]: 'playing',
            [PAUSED]: 'paused',
            [ENDED]: 'ended',
            [BUFFERING]: 'buffering',
            [CUED]: 'cued'
        },
    }),
    computed: {
        videoId() {
            const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
            let match = this.source.match(regExp);
            return (match && match[7].length == 11) ? match[7] : false;
        }
    },
    methods: {
        playerReady(e) {
            this.$emit('ready', e.target)
        },
        playerStateChange(e) {
            if (e.data !== null && e.data !== UNSTARTED) {
                this.$emit(this.events[e.data], e.target);
            }
        },
        playerError(e) {
            this.$emit('error', e.target)
        },
        updatePlayer(videoId) {
            if (!videoId) {
                this.instance.stopVideo()
                return
            }

            if (this.instanceVars.autoplay === 1) {
                this.instance.loadVideoById({videoId});
                return
            }

            this.instance.cueVideoById({videoId})
        },
    },
    watch: {
        videoId: 'updatePlayer',
    },
    beforeDestroy() {
        if (this.instance !== null && this.instance.destroy) {
            this.instance.destroy()
            delete this.instance
        }

        if (this.resize) {
            window.removeEventListener('resize', this.onResize)
        }
    },
    mounted() {
        window.YTConfig = {
            host: 'https://www.youtube.com/iframe_api'
        };

        const host = this.nocookie ? 'https://www.youtube-nocookie.com' : 'https://www.youtube.com';

        console.log(this.width);

        this.player = player(this.$el, {
            host,
            width: this.$el.clientWidth,
            height: this.$el.clientHeight,
            videoId: this.videoId,
            playerVars: this.playerVars
        });

        this.player.on('ready', this.playerReady);
        this.player.on('stateChange', this.playerStateChange);
        this.player.on('error', this.playerError);
    },
    render(h) {
        return h('div')
    }
}
</script>
