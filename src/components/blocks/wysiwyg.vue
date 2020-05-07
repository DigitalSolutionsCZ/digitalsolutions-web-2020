<template functional>
    <div class="wysiwyg-content" :class="parent.toClass(props.content, ['marginB', 'marginT'])">
        <div v-html="props.content.wysiwyg"
             :class="parent.toClass(props.content, ['wysiwyg', 'typeHandle', 'marginT', 'marginB'], true)"/>
    </div>
</template>

<script>
export default {
    props: {
        content: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>
    .wysiwyg-content p,
    .wysiwyg-content ul,
    .wysiwyg-content ol {
        margin-bottom: 1rem
    }

    .wysiwyg-content ol {
        padding-left: 1.25rem;
        list-style: decimal;
    }

    .wysiwyg-content ul li {
        padding-left: 1rem;
        position: relative
    }


    .wysiwyg-content ul li:before {
        content: "";
        margin-top: .6em;
        margin-right: .75rem;
        width: .5rem;
        height: .5rem;
        background-image: linear-gradient(90deg, #007dc5, #72bf44);
        border-radius: 9999px;
        position: absolute;
        left: 0
    }

    .wysiwyg-content li {
        margin-bottom: .25rem
    }

    .wysiwyg-content h2 {
        margin-bottom: .5rem;
        font-size: 1.125rem;
        font-weight: 700;
        color: #000
    }

    .wysiwyg-content h3 {
        margin-bottom: .5rem;
        font-size: 1.125rem;
        font-weight: 600;
        color: #72bf44
    }

    .wysiwyg-content a {
        color: #72bf44
    }

    @media (min-width: 768px) {
        .wysiwyg-content h2 {
            margin-bottom: 1rem;
            font-size: 2.175rem
        }

        .wysiwyg-content h3 {
            margin-bottom: 1rem;
            font-size: 1.25rem
        }

        .wysiwyg-content p, .wysiwyg-content ul {
            margin-bottom: 1.25rem
        }
    }

    @media (min-width: 1280px) {
        .wysiwyg-content h2 {
            margin-bottom: 1rem;
            font-size: 3.75rem
        }

        .wysiwyg-content h3 {
            margin-bottom: 1rem;
            font-size: 1.625rem
        }

        .wysiwyg-content p, .wysiwyg-content ul {
            margin-bottom: 2rem
        }
    }
</style>
