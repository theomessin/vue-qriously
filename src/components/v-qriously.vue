<template>
    <div>
        <canvas ref="qrcode"></canvas>
    </div>
</template>

<script>
import Qrious from 'qrious'

export default {
    data() {
        return {qrious: null};
    },
    props: {
        background: {
            type: String,
            default: 'white'
        },
        backgroundAlpha: {
            type: Number,
            default: 0.0
        },
        foreground: {
            type: String,
            default: 'black'
        },
        foregroundAlpha: {
            type: Number,
            default: 1.0
        },
        level: {
            type: String,
            default: 'L'
        },
        mime: {
            type: String,
            default: 'image/png'
        },
        padding: {
            type: Number,
            default: null
        },
        size: {
            type: Number,
            default: 100
        },
        value: {
            type: String,
            required: true
        }
    },
    watch: {
        background () {
            this.qrious.background = this.background;
        },
        backgroundAlpha () {
            this.qrious.backgroundAlpha = this.backgroundAlpha;
        },
        foreground () {
            this.qrious.foreground = this.foreground;
        },
        foregroundAlpha () {
            this.qrious.foregroundAlpha = this.foregroundAlpha;
        },
        level () {
            this.qrious.level = this.level;
        },
        mime () {
            this.qrious.mime = this.mime;
        },
        padding () {
            this.qrious.padding = this.padding;
        },
        size () {
            this.qrious.size = this.size;
        },
        value () {
            this.qrious.value = this.value;
        }
    },
    mounted () {
        const element = this.$refs.qrcode;
        const background = this.background;
        const backgroundAlpha = this.backgroundAlpha;
        const foreground = this.foreground;
        const foregroundAlpha = this.foregroundAlpha;
        const level = this.level;
        const mime = this.mime;
        const padding = this.padding;
        const size = this.size;
        const value = this.value;

        this.qrious = new Qrious({
            element,
            background,
            backgroundAlpha,
            foreground,
            foregroundAlpha,
            level,
            mime,
            padding,
            size,
            value
        });
    }
}
</script>