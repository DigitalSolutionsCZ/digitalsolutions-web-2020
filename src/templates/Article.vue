<template>
    <Layout :page-slug="$context.slug">
        <div>
            <!--    Container    -->
            <template v-for="container in builder">
                <div class="flex" :key="container.id" :class="toClass(container, ['bgColorContainer'])"
                     :style="backgroundImage(container.imgContainer)">
                    <div
                        class="container mx-auto w-full"
                        :class="toClass(container, ['id', 'rows', 'typeHandle', '__typename', 'bgColorContainer'], true)"
                        :style="backgroundImage(container.img)"
                    >
                        <slot>
                            <!-- Layout Component  -->
                            <template v-for="(row, index) in container.rows">
                                <div :key="container.id + index" class="flex flex-wrap"
                                     :class="containerClasses(row.typeHandle)">
                                    <!-- Column Component  -->
                                    <template v-for="(column, columnIndex) in row.columns">
                                        <div
                                            :key="container.id + index + columnIndex"
                                            :class="[columnClasses(row.typeHandle, columnIndex), toClass(column, ['selfVerticalAlign']), {'w-full' :column.typeHandle === 'columnBreak'}]"
                                        >
                                            <div :class="toClass(column, ['marginX', 'marginY', 'padding', 'shadow', 'rounded'])">
                                                <template v-if="column.typeHandle !== 'columnBreak'">
                                                    <!-- Blocks Component  -->
                                                    <template v-for="block in column.blocks">
                                                        <component
                                                            :is="block.typeHandle + '-block'"
                                                            :content="block"
                                                        />
                                                    </template>
                                                </template>
                                            </div>
                                        </div>
                                    </template>
                                </div>
                            </template>

                        </slot>
                    </div>
                </div>
            </template>
        </div>
    </Layout>
</template>

<script>
const layoutClassesPreset = {
    layoutCustom: '',
    layoutFull: {
        container: '',
        columns: 'w-full'
    },
    layoutTwoHalf: {
        container: '',
        columns: ['w-full md:w-6/12', 'w-full md:w-6/12']
    },
    layoutThreeThird: {
        columns: 'w-full md:w-4/12'
    },
    layoutTwoThirdCenter: {
        container: 'justify-center',
        columns: 'w-full md:w-8/12'
    },
    layoutHalfCenter: {
        container: 'justify-center',
        columns: 'w-full md:w-6/12'
    },
    layoutThirdCenter: {
        container: 'justify-center',
        columns: 'w-full md:w-4/12'
    },
    layoutTwoTwoHalf: {
        container: 'justify-center',
        columns: 'w-full md:w-2/5'
    },
    layoutFourQuarter: {
        container: 'justify-center',
        columns: 'w-full md:w-6/12 lg:w-3/12'
    },
    layoutThirdAndTwoThirds: {
        columns: ['w-full md:w-4/12', 'w-full md:w-8/12']
    },
    layoutTwoThirdsAndThird: {
        columns: ['w-full md:w-8/12', 'w-full md:w-4/12']
    }
}

import headlineBlock from '../components/blocks/headline.vue';
import wysiwygBlock from '../components/blocks/wysiwyg.vue';
import hrBlock from '../components/blocks/hr.vue';
import buttonBlock from '../components/blocks/button.vue';
import imageBlock from '../components/blocks/image.vue';

export default {
    components: {
        'headline-block': headlineBlock,
        'wysiwyg-block': wysiwygBlock,
        'hr-block': hrBlock,
        'button-block': buttonBlock,
        'image-block': imageBlock,
    },
    computed: {
        builder() {
            return this.$page.craft.entry.contentBuilder;
        }
    },
    methods: {
        backgroundImage(image) {
            if (!image[0]?.url) return false;
            return {
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(${image[0].url}`
            };
        },
        toClass(object, attrArray, reverse = false) {
            return Object.keys(object).reduce((finalClassArray, key) => {
                if (reverse ? !attrArray.includes(key) : attrArray.includes(key)) {
                    finalClassArray.push(this._attributeToClass(key, object[key]));
                }
                return finalClassArray;
            }, []);
        },
        containerClasses(rowTypeHandle) {
            return layoutClassesPreset[rowTypeHandle]?.container ?? null;
        },
        columnClasses(rowTypeHandle, index) {
            if (!layoutClassesPreset[rowTypeHandle]?.columns) return null;
            if (Array.isArray(layoutClassesPreset[rowTypeHandle]?.columns)) {
                return layoutClassesPreset[rowTypeHandle]?.columns[index];
            }
            return layoutClassesPreset[rowTypeHandle]?.columns;
        },
        _attributeToClass(key, attribute) {
            if (typeof attribute === 'boolean' && attribute) {
                return key;
            }
            if (typeof attribute === 'string') {
                return attribute
            }
        }
    }
}
</script>

<page-query>
    query($slug: [String]) {
        craft {
            entry(slug: $slug) {
                slug
                id
                title,
                ...on craft_news_article_Entry {
                    contentBuilder: block {
                        __typename,
                        ...on craft_block_container_BlockType {
                            id
                            typeHandle
                            bgColor,
                            img {url},
                            bgColorContainer,
                            imgContainer {url},
                            marginY,
                            shadow,
                            rounded,
                            rows: children {
                                ...on craft_block_layoutCustom_BlockType {
                                    typeHandle,
                                    columns: children {
                                        ...on craft_block_columnBreak_BlockType {
                                            typeHandle
                                        },
                                        ...on craft_block_columnCustom_BlockType {
                                            typeHandle
                                            rounded,
                                            shadow,
                                            padding,
                                            selfVerticalAlign,
                                            width,
                                            widthMedium,
                                            widthLarge,
                                            widthXLarge,
                                            width2XLarge,
                                            blocks: children {
                                                ...on craft_block_headline_BlockType {
                                                    typeHandle,
                                                    textRedactor,
                                                    headline,
                                                    textAlign,
                                                    color,
                                                    marginT,
                                                    marginB,
                                                    fontSize,
                                                    fontSizeMedium,
                                                    fontSizeLarge,
                                                    fontSizeXLarge,
                                                    fontSize2XLarge,
                                                },
                                                ...on craft_block_wysiwyg_BlockType {
                                                    typeHandle,
                                                    wysiwyg,
                                                    textAlign,
                                                    color,
                                                    marginT,
                                                    marginB,
                                                    fontSize,
                                                    fontSizeMedium,
                                                    fontSizeLarge,
                                                    fontSizeXLarge,
                                                    fontSize2XLarge,
                                                },
                                                ...on craft_block_hr_BlockType {
                                                    typeHandle,
                                                    bgColor,
                                                    marginT,
                                                    marginB,
                                                    hrSize,
                                                }
                                                ...on craft_block_image_BlockType {
                                                    typeHandle,
                                                    img {
                                                        origin: url,
                                                        smallImage: url(transform: "smallImage"),
                                                        mediumImage: url(transform: "mediumImage")
                                                        largeImage: url(transform: "largeImage"),
                                                        xlargeImage: url(transform: "xlargeImage"),
                                                        xxlargeImage: url(transform: "xxlargeImage"),
                                                    }
                                                    aspectRatio,
                                                    href,
                                                    hrefTarget,
                                                    imgSize,
                                                    rounded,
                                                    shadow,
                                                    marginT,
                                                    marginB,
                                                    width,
                                                    widthMedium,
                                                    widthLarge,
                                                    widthXLarge,
                                                    width2XLarge
                                                },
                                                ...on craft_block_button_BlockType {
                                                    typeHandle,
                                                    text,
                                                    href,
                                                    hrefTarget,
                                                    shadow,
                                                    rounded,
                                                    buttonColor,
                                                    buttonSize,
                                                    marginT,
                                                    marginB,
                                                    width,
                                                    widthMedium,
                                                    widthLarge,
                                                    widthXLarge,
                                                    width2XLarge,
                                                    fontSize,
                                                    fontSizeMedium,
                                                    fontSizeLarge,
                                                    fontSizeXLarge,
                                                    fontSize2XLarge,
                                                }
                                            }
                                        }
                                    }
                                },
                                ...on craft_block_layoutFull_BlockType {
                                    typeHandle,
                                    columns: children {
                                        ...on craft_block_columnDefined_BlockType {
                                            typeHandle,
                                            marginX,
                                            marginY,
                                            padding,
                                            shadow,
                                            rounded
                                            bgColor,
                                            selfVerticalAlign,
                                            blocks: children {
                                                ...on craft_block_headline_BlockType {
                                                    typeHandle,
                                                    textRedactor,
                                                    headline,
                                                    textAlign,
                                                    color,
                                                    marginT,
                                                    marginB,
                                                    fontSize,
                                                    fontSizeMedium,
                                                    fontSizeLarge,
                                                    fontSizeXLarge,
                                                    fontSize2XLarge,
                                                },
                                                ...on craft_block_wysiwyg_BlockType {
                                                    typeHandle,
                                                    wysiwyg,
                                                    textAlign,
                                                    color,
                                                    marginT,
                                                    marginB,
                                                    fontSize,
                                                    fontSizeMedium,
                                                    fontSizeLarge,
                                                    fontSizeXLarge,
                                                    fontSize2XLarge,
                                                },
                                                ...on craft_block_hr_BlockType {
                                                    typeHandle,
                                                    bgColor,
                                                    marginT,
                                                    marginB,
                                                    hrSize,
                                                }
                                                ...on craft_block_image_BlockType {
                                                    typeHandle,
                                                    img {
                                                        origin: url,
                                                        smallImage: url(transform: "smallImage"),
                                                        mediumImage: url(transform: "mediumImage")
                                                        largeImage: url(transform: "largeImage"),
                                                        xlargeImage: url(transform: "xlargeImage"),
                                                        xxlargeImage: url(transform: "xxlargeImage"),
                                                    }
                                                    aspectRatio,
                                                    href,
                                                    hrefTarget,
                                                    imgSize,
                                                    rounded,
                                                    shadow,
                                                    marginT,
                                                    marginB,
                                                    width,
                                                    widthMedium,
                                                    widthLarge,
                                                    widthXLarge,
                                                    width2XLarge
                                                },
                                                ...on craft_block_button_BlockType {
                                                    typeHandle,
                                                    text,
                                                    href,
                                                    hrefTarget,
                                                    shadow,
                                                    rounded,
                                                    buttonColor
                                                    buttonSize,
                                                    marginT,
                                                    marginB,
                                                    width,
                                                    widthMedium,
                                                    widthLarge,
                                                    widthXLarge,
                                                    width2XLarge,
                                                    fontSize,
                                                    fontSizeMedium,
                                                    fontSizeLarge,
                                                    fontSizeXLarge,
                                                    fontSize2XLarge,
                                                }
                                            }
                                        }
                                    }
                                },
                                ...on craft_block_layoutHalfCenter_BlockType {
                                    typeHandle,
                                    columns: children {
                                        ...on craft_block_columnDefined_BlockType {
                                            typeHandle,
                                            marginX,
                                            marginY,
                                            padding,
                                            shadow,
                                            rounded
                                            bgColor,
                                            selfVerticalAlign,
                                            blocks: children {
                                                ...on craft_block_headline_BlockType {
                                                    typeHandle,
                                                    textRedactor,
                                                    headline,
                                                    textAlign,
                                                    color,
                                                    marginT,
                                                    marginB,
                                                    fontSize,
                                                    fontSizeMedium,
                                                    fontSizeLarge,
                                                    fontSizeXLarge,
                                                    fontSize2XLarge,
                                                },
                                                ...on craft_block_wysiwyg_BlockType {
                                                    typeHandle,
                                                    wysiwyg,
                                                    textAlign,
                                                    color,
                                                    marginT,
                                                    marginB,
                                                    fontSize,
                                                    fontSizeMedium,
                                                    fontSizeLarge,
                                                    fontSizeXLarge,
                                                    fontSize2XLarge,
                                                },
                                                ...on craft_block_hr_BlockType {
                                                    typeHandle,
                                                    bgColor,
                                                    marginT,
                                                    marginB,
                                                    hrSize,
                                                }
                                                ...on craft_block_image_BlockType {
                                                    typeHandle,
                                                    img {
                                                        origin: url,
                                                        smallImage: url(transform: "smallImage"),
                                                        mediumImage: url(transform: "mediumImage")
                                                        largeImage: url(transform: "largeImage"),
                                                        xlargeImage: url(transform: "xlargeImage"),
                                                        xxlargeImage: url(transform: "xxlargeImage"),
                                                    }
                                                    aspectRatio,
                                                    href,
                                                    hrefTarget,
                                                    imgSize,
                                                    rounded,
                                                    shadow,
                                                    marginT,
                                                    marginB,
                                                    width,
                                                    widthMedium,
                                                    widthLarge,
                                                    widthXLarge,
                                                    width2XLarge
                                                },
                                                ...on craft_block_button_BlockType {
                                                    typeHandle,
                                                    text,
                                                    href,
                                                    hrefTarget,
                                                    shadow,
                                                    rounded,
                                                    buttonColor
                                                    buttonSize,
                                                    marginT,
                                                    marginB,
                                                    width,
                                                    widthMedium,
                                                    widthLarge,
                                                    widthXLarge,
                                                    width2XLarge,
                                                    fontSize,
                                                    fontSizeMedium,
                                                    fontSizeLarge,
                                                    fontSizeXLarge,
                                                    fontSize2XLarge,
                                                }
                                            }
                                        }
                                    }
                                },
                                ...on craft_block_layoutTwoHalf_BlockType {
                                    typeHandle,
                                    columns: children {
                                        ...on craft_block_columnDefined_BlockType {
                                            typeHandle,
                                            marginX,
                                            marginY,
                                            padding,
                                            shadow,
                                            rounded
                                            bgColor,
                                            selfVerticalAlign,
                                            blocks: children {
                                                ...on craft_block_headline_BlockType {
                                                    typeHandle,
                                                    textRedactor,
                                                    headline,
                                                    textAlign,
                                                    color,
                                                    marginT,
                                                    marginB,
                                                    fontSize,
                                                    fontSizeMedium,
                                                    fontSizeLarge,
                                                    fontSizeXLarge,
                                                    fontSize2XLarge,
                                                },
                                                ...on craft_block_wysiwyg_BlockType {
                                                    typeHandle,
                                                    wysiwyg,
                                                    textAlign,
                                                    color,
                                                    marginT,
                                                    marginB,
                                                    fontSize,
                                                    fontSizeMedium,
                                                    fontSizeLarge,
                                                    fontSizeXLarge,
                                                    fontSize2XLarge,
                                                },
                                                ...on craft_block_hr_BlockType {
                                                    typeHandle,
                                                    bgColor,
                                                    marginT,
                                                    marginB,
                                                    hrSize,
                                                }
                                                ...on craft_block_image_BlockType {
                                                    typeHandle,
                                                    img {
                                                        origin: url,
                                                        smallImage: url(transform: "smallImage"),
                                                        mediumImage: url(transform: "mediumImage")
                                                        largeImage: url(transform: "largeImage"),
                                                        xlargeImage: url(transform: "xlargeImage"),
                                                        xxlargeImage: url(transform: "xxlargeImage"),
                                                    }
                                                    aspectRatio,
                                                    href,
                                                    hrefTarget,
                                                    imgSize,
                                                    rounded,
                                                    shadow,
                                                    marginT,
                                                    marginB,
                                                    width,
                                                    widthMedium,
                                                    widthLarge,
                                                    widthXLarge,
                                                    width2XLarge
                                                },
                                                ...on craft_block_button_BlockType {
                                                    typeHandle,
                                                    text,
                                                    href,
                                                    hrefTarget,
                                                    shadow,
                                                    rounded,
                                                    buttonColor
                                                    buttonSize,
                                                    marginT,
                                                    marginB,
                                                    width,
                                                    widthMedium,
                                                    widthLarge,
                                                    widthXLarge,
                                                    width2XLarge,
                                                    fontSize,
                                                    fontSizeMedium,
                                                    fontSizeLarge,
                                                    fontSizeXLarge,
                                                    fontSize2XLarge,
                                                }
                                            }
                                        }
                                    }
                                },
                                ...on craft_block_layoutTwoTwoHalf_BlockType {
                                    typeHandle,
                                    columns: children {
                                        ...on craft_block_columnDefined_BlockType {
                                            typeHandle,
                                            marginX,
                                            marginY,
                                            padding,
                                            shadow,
                                            rounded
                                            bgColor,
                                            selfVerticalAlign,
                                            blocks: children {
                                                ...on craft_block_headline_BlockType {
                                                    typeHandle,
                                                    textRedactor,
                                                    headline,
                                                    textAlign,
                                                    color,
                                                    marginT,
                                                    marginB,
                                                    fontSize,
                                                    fontSizeMedium,
                                                    fontSizeLarge,
                                                    fontSizeXLarge,
                                                    fontSize2XLarge,
                                                },
                                                ...on craft_block_wysiwyg_BlockType {
                                                    typeHandle,
                                                    wysiwyg,
                                                    textAlign,
                                                    color,
                                                    marginT,
                                                    marginB,
                                                    fontSize,
                                                    fontSizeMedium,
                                                    fontSizeLarge,
                                                    fontSizeXLarge,
                                                    fontSize2XLarge,
                                                },
                                                ...on craft_block_hr_BlockType {
                                                    typeHandle,
                                                    bgColor,
                                                    marginT,
                                                    marginB,
                                                    hrSize,
                                                }
                                                ...on craft_block_image_BlockType {
                                                    typeHandle,
                                                    img {
                                                        origin: url,
                                                        smallImage: url(transform: "smallImage"),
                                                        mediumImage: url(transform: "mediumImage")
                                                        largeImage: url(transform: "largeImage"),
                                                        xlargeImage: url(transform: "xlargeImage"),
                                                        xxlargeImage: url(transform: "xxlargeImage"),
                                                    }
                                                    aspectRatio,
                                                    href,
                                                    hrefTarget,
                                                    imgSize,
                                                    rounded,
                                                    shadow,
                                                    marginT,
                                                    marginB,
                                                    width,
                                                    widthMedium,
                                                    widthLarge,
                                                    widthXLarge,
                                                    width2XLarge
                                                },
                                                ...on craft_block_button_BlockType {
                                                    typeHandle,
                                                    text,
                                                    href,
                                                    hrefTarget,
                                                    shadow,
                                                    rounded,
                                                    buttonColor
                                                    buttonSize,
                                                    marginT,
                                                    marginB,
                                                    width,
                                                    widthMedium,
                                                    widthLarge,
                                                    widthXLarge,
                                                    width2XLarge,
                                                    fontSize,
                                                    fontSizeMedium,
                                                    fontSizeLarge,
                                                    fontSizeXLarge,
                                                    fontSize2XLarge,
                                                }
                                            }
                                        }
                                    }
                                },
                                ...on craft_block_layoutThreeThird_BlockType {
                                    typeHandle,
                                    columns: children {
                                        ...on craft_block_columnDefined_BlockType {
                                            typeHandle,
                                            marginX,
                                            marginY,
                                            padding,
                                            shadow,
                                            rounded
                                            bgColor,
                                            selfVerticalAlign,
                                            blocks: children {
                                                ...on craft_block_headline_BlockType {
                                                    typeHandle,
                                                    textRedactor,
                                                    headline,
                                                    textAlign,
                                                    color,
                                                    marginT,
                                                    marginB,
                                                    fontSize,
                                                    fontSizeMedium,
                                                    fontSizeLarge,
                                                    fontSizeXLarge,
                                                    fontSize2XLarge,
                                                },
                                                ...on craft_block_wysiwyg_BlockType {
                                                    typeHandle,
                                                    wysiwyg,
                                                    textAlign,
                                                    color,
                                                    marginT,
                                                    marginB,
                                                    fontSize,
                                                    fontSizeMedium,
                                                    fontSizeLarge,
                                                    fontSizeXLarge,
                                                    fontSize2XLarge,
                                                },
                                                ...on craft_block_hr_BlockType {
                                                    typeHandle,
                                                    bgColor,
                                                    marginT,
                                                    marginB,
                                                    hrSize,
                                                }
                                                ...on craft_block_image_BlockType {
                                                    typeHandle,
                                                    img {
                                                        origin: url,
                                                        smallImage: url(transform: "smallImage"),
                                                        mediumImage: url(transform: "mediumImage")
                                                        largeImage: url(transform: "largeImage"),
                                                        xlargeImage: url(transform: "xlargeImage"),
                                                        xxlargeImage: url(transform: "xxlargeImage"),
                                                    }
                                                    aspectRatio,
                                                    href,
                                                    hrefTarget,
                                                    imgSize,
                                                    rounded,
                                                    shadow,
                                                    marginT,
                                                    marginB,
                                                    width,
                                                    widthMedium,
                                                    widthLarge,
                                                    widthXLarge,
                                                    width2XLarge
                                                },
                                                ...on craft_block_button_BlockType {
                                                    typeHandle,
                                                    text,
                                                    href,
                                                    hrefTarget,
                                                    shadow,
                                                    rounded,
                                                    buttonColor
                                                    buttonSize,
                                                    marginT,
                                                    marginB,
                                                    width,
                                                    widthMedium,
                                                    widthLarge,
                                                    widthXLarge,
                                                    width2XLarge,
                                                    fontSize,
                                                    fontSizeMedium,
                                                    fontSizeLarge,
                                                    fontSizeXLarge,
                                                    fontSize2XLarge,
                                                }
                                            }
                                        }
                                    }
                                },
                                ...on craft_block_layoutThirdCenter_BlockType {
                                    typeHandle,
                                    columns: children {
                                        ...on craft_block_columnDefined_BlockType {
                                            typeHandle,
                                            marginX,
                                            marginY,
                                            padding,
                                            shadow,
                                            rounded
                                            bgColor,
                                            selfVerticalAlign,
                                            blocks: children {
                                                ...on craft_block_headline_BlockType {
                                                    typeHandle,
                                                    textRedactor,
                                                    headline,
                                                    textAlign,
                                                    color,
                                                    marginT,
                                                    marginB,
                                                    fontSize,
                                                    fontSizeMedium,
                                                    fontSizeLarge,
                                                    fontSizeXLarge,
                                                    fontSize2XLarge,
                                                },
                                                ...on craft_block_wysiwyg_BlockType {
                                                    typeHandle,
                                                    wysiwyg,
                                                    textAlign,
                                                    color,
                                                    marginT,
                                                    marginB,
                                                    fontSize,
                                                    fontSizeMedium,
                                                    fontSizeLarge,
                                                    fontSizeXLarge,
                                                    fontSize2XLarge,
                                                },
                                                ...on craft_block_hr_BlockType {
                                                    typeHandle,
                                                    bgColor,
                                                    marginT,
                                                    marginB,
                                                    hrSize,
                                                }
                                                ...on craft_block_image_BlockType {
                                                    typeHandle,
                                                    img {
                                                        origin: url,
                                                        smallImage: url(transform: "smallImage"),
                                                        mediumImage: url(transform: "mediumImage")
                                                        largeImage: url(transform: "largeImage"),
                                                        xlargeImage: url(transform: "xlargeImage"),
                                                        xxlargeImage: url(transform: "xxlargeImage"),
                                                    }
                                                    aspectRatio,
                                                    href,
                                                    hrefTarget,
                                                    imgSize,
                                                    rounded,
                                                    shadow,
                                                    marginT,
                                                    marginB,
                                                    width,
                                                    widthMedium,
                                                    widthLarge,
                                                    widthXLarge,
                                                    width2XLarge
                                                },
                                                ...on craft_block_button_BlockType {
                                                    typeHandle,
                                                    text,
                                                    href,
                                                    hrefTarget,
                                                    shadow,
                                                    rounded,
                                                    buttonColor
                                                    buttonSize,
                                                    marginT,
                                                    marginB,
                                                    width,
                                                    widthMedium,
                                                    widthLarge,
                                                    widthXLarge,
                                                    width2XLarge,
                                                    fontSize,
                                                    fontSizeMedium,
                                                    fontSizeLarge,
                                                    fontSizeXLarge,
                                                    fontSize2XLarge,
                                                }
                                            }
                                        }
                                    }
                                },
                                ...on craft_block_layoutFourQuarter_BlockType {
                                    typeHandle,
                                    columns: children {
                                        ...on craft_block_columnDefined_BlockType {
                                            typeHandle,
                                            marginX,
                                            marginY,
                                            padding,
                                            shadow,
                                            rounded
                                            bgColor,
                                            selfVerticalAlign,
                                            blocks: children {
                                                ...on craft_block_headline_BlockType {
                                                    typeHandle,
                                                    textRedactor,
                                                    headline,
                                                    textAlign,
                                                    color,
                                                    marginT,
                                                    marginB,
                                                    fontSize,
                                                    fontSizeMedium,
                                                    fontSizeLarge,
                                                    fontSizeXLarge,
                                                    fontSize2XLarge,
                                                },
                                                ...on craft_block_wysiwyg_BlockType {
                                                    typeHandle,
                                                    wysiwyg,
                                                    textAlign,
                                                    color,
                                                    marginT,
                                                    marginB,
                                                    fontSize,
                                                    fontSizeMedium,
                                                    fontSizeLarge,
                                                    fontSizeXLarge,
                                                    fontSize2XLarge,
                                                },
                                                ...on craft_block_hr_BlockType {
                                                    typeHandle,
                                                    bgColor,
                                                    marginT,
                                                    marginB,
                                                    hrSize,
                                                }
                                                ...on craft_block_image_BlockType {
                                                    typeHandle,
                                                    img {
                                                        origin: url,
                                                        smallImage: url(transform: "smallImage"),
                                                        mediumImage: url(transform: "mediumImage")
                                                        largeImage: url(transform: "largeImage"),
                                                        xlargeImage: url(transform: "xlargeImage"),
                                                        xxlargeImage: url(transform: "xxlargeImage"),
                                                    }
                                                    aspectRatio,
                                                    href,
                                                    hrefTarget,
                                                    imgSize,
                                                    rounded,
                                                    shadow,
                                                    marginT,
                                                    marginB,
                                                    width,
                                                    widthMedium,
                                                    widthLarge,
                                                    widthXLarge,
                                                    width2XLarge
                                                },
                                                ...on craft_block_button_BlockType {
                                                    typeHandle,
                                                    text,
                                                    href,
                                                    hrefTarget,
                                                    shadow,
                                                    rounded,
                                                    buttonColor
                                                    buttonSize,
                                                    marginT,
                                                    marginB,
                                                    width,
                                                    widthMedium,
                                                    widthLarge,
                                                    widthXLarge,
                                                    width2XLarge,
                                                    fontSize,
                                                    fontSizeMedium,
                                                    fontSizeLarge,
                                                    fontSizeXLarge,
                                                    fontSize2XLarge,
                                                }
                                            }
                                        }
                                    }
                                },
                                ...on craft_block_layoutTwoThirdCenter_BlockType {
                                    typeHandle,
                                    columns: children {
                                        ...on craft_block_columnDefined_BlockType {
                                            typeHandle,
                                            marginX,
                                            marginY,
                                            padding,
                                            shadow,
                                            rounded
                                            bgColor,
                                            selfVerticalAlign,
                                            blocks: children {
                                                ...on craft_block_headline_BlockType {
                                                    typeHandle,
                                                    textRedactor,
                                                    headline,
                                                    textAlign,
                                                    color,
                                                    marginT,
                                                    marginB,
                                                    fontSize,
                                                    fontSizeMedium,
                                                    fontSizeLarge,
                                                    fontSizeXLarge,
                                                    fontSize2XLarge,
                                                },
                                                ...on craft_block_wysiwyg_BlockType {
                                                    typeHandle,
                                                    wysiwyg,
                                                    textAlign,
                                                    color,
                                                    marginT,
                                                    marginB,
                                                    fontSize,
                                                    fontSizeMedium,
                                                    fontSizeLarge,
                                                    fontSizeXLarge,
                                                    fontSize2XLarge,
                                                },
                                                ...on craft_block_hr_BlockType {
                                                    typeHandle,
                                                    bgColor,
                                                    marginT,
                                                    marginB,
                                                    hrSize,
                                                }
                                                ...on craft_block_image_BlockType {
                                                    typeHandle,
                                                    img {
                                                        origin: url,
                                                        smallImage: url(transform: "smallImage"),
                                                        mediumImage: url(transform: "mediumImage")
                                                        largeImage: url(transform: "largeImage"),
                                                        xlargeImage: url(transform: "xlargeImage"),
                                                        xxlargeImage: url(transform: "xxlargeImage"),
                                                    }
                                                    aspectRatio,
                                                    href,
                                                    hrefTarget,
                                                    imgSize,
                                                    rounded,
                                                    shadow,
                                                    marginT,
                                                    marginB,
                                                    width,
                                                    widthMedium,
                                                    widthLarge,
                                                    widthXLarge,
                                                    width2XLarge
                                                },
                                                ...on craft_block_button_BlockType {
                                                    typeHandle,
                                                    text,
                                                    href,
                                                    hrefTarget,
                                                    shadow,
                                                    rounded,
                                                    buttonColor
                                                    buttonSize,
                                                    marginT,
                                                    marginB,
                                                    width,
                                                    widthMedium,
                                                    widthLarge,
                                                    widthXLarge,
                                                    width2XLarge,
                                                    fontSize,
                                                    fontSizeMedium,
                                                    fontSizeLarge,
                                                    fontSizeXLarge,
                                                    fontSize2XLarge,
                                                }
                                            }
                                        }
                                    }
                                },
                                ...on craft_block_layoutThirdAndTwoThirds_BlockType {
                                    typeHandle,
                                    columns: children {
                                        ...on craft_block_columnDefined_BlockType {
                                            typeHandle,
                                            marginX,
                                            marginY,
                                            padding,
                                            shadow,
                                            rounded
                                            bgColor,
                                            selfVerticalAlign,
                                            blocks: children {
                                                ...on craft_block_headline_BlockType {
                                                    typeHandle,
                                                    textRedactor,
                                                    headline,
                                                    textAlign,
                                                    color,
                                                    marginT,
                                                    marginB,
                                                    fontSize,
                                                    fontSizeMedium,
                                                    fontSizeLarge,
                                                    fontSizeXLarge,
                                                    fontSize2XLarge,
                                                },
                                                ...on craft_block_wysiwyg_BlockType {
                                                    typeHandle,
                                                    wysiwyg,
                                                    textAlign,
                                                    color,
                                                    marginT,
                                                    marginB,
                                                    fontSize,
                                                    fontSizeMedium,
                                                    fontSizeLarge,
                                                    fontSizeXLarge,
                                                    fontSize2XLarge,
                                                },
                                                ...on craft_block_hr_BlockType {
                                                    typeHandle,
                                                    bgColor,
                                                    marginT,
                                                    marginB,
                                                    hrSize,
                                                }
                                                ...on craft_block_image_BlockType {
                                                    typeHandle,
                                                    img {
                                                        origin: url,
                                                        smallImage: url(transform: "smallImage"),
                                                        mediumImage: url(transform: "mediumImage")
                                                        largeImage: url(transform: "largeImage"),
                                                        xlargeImage: url(transform: "xlargeImage"),
                                                        xxlargeImage: url(transform: "xxlargeImage"),
                                                    }
                                                    aspectRatio,
                                                    href,
                                                    hrefTarget,
                                                    imgSize,
                                                    rounded,
                                                    shadow,
                                                    marginT,
                                                    marginB,
                                                    width,
                                                    widthMedium,
                                                    widthLarge,
                                                    widthXLarge,
                                                    width2XLarge
                                                },
                                                ...on craft_block_button_BlockType {
                                                    typeHandle,
                                                    text,
                                                    href,
                                                    hrefTarget,
                                                    shadow,
                                                    rounded,
                                                    buttonColor
                                                    buttonSize,
                                                    marginT,
                                                    marginB,
                                                    width,
                                                    widthMedium,
                                                    widthLarge,
                                                    widthXLarge,
                                                    width2XLarge,
                                                    fontSize,
                                                    fontSizeMedium,
                                                    fontSizeLarge,
                                                    fontSizeXLarge,
                                                    fontSize2XLarge,
                                                }
                                            }
                                        }
                                    }
                                },
                                ...on craft_block_layoutTwoThirdsAndThird_BlockType {
                                    typeHandle,
                                    columns: children {
                                        ...on craft_block_columnDefined_BlockType {
                                            typeHandle,
                                            marginX,
                                            marginY,
                                            padding,
                                            shadow,
                                            rounded
                                            bgColor,
                                            selfVerticalAlign,
                                            blocks: children {
                                                ...on craft_block_headline_BlockType {
                                                    typeHandle,
                                                    textRedactor,
                                                    headline,
                                                    textAlign,
                                                    color,
                                                    marginT,
                                                    marginB,
                                                    fontSize,
                                                    fontSizeMedium,
                                                    fontSizeLarge,
                                                    fontSizeXLarge,
                                                    fontSize2XLarge,
                                                },
                                                ...on craft_block_wysiwyg_BlockType {
                                                    typeHandle,
                                                    wysiwyg,
                                                    textAlign,
                                                    color,
                                                    marginT,
                                                    marginB,
                                                    fontSize,
                                                    fontSizeMedium,
                                                    fontSizeLarge,
                                                    fontSizeXLarge,
                                                    fontSize2XLarge,
                                                },
                                                ...on craft_block_hr_BlockType {
                                                    typeHandle,
                                                    bgColor,
                                                    marginT,
                                                    marginB,
                                                }
                                                ...on craft_block_image_BlockType {
                                                    typeHandle,
                                                    img {
                                                        origin: url,
                                                        smallImage: url(transform: "smallImage"),
                                                        mediumImage: url(transform: "mediumImage")
                                                        largeImage: url(transform: "largeImage"),
                                                        xlargeImage: url(transform: "xlargeImage"),
                                                        xxlargeImage: url(transform: "xxlargeImage"),
                                                    }
                                                    aspectRatio,
                                                    href,
                                                    hrefTarget,
                                                    imgSize,
                                                    rounded,
                                                    shadow,
                                                    marginT,
                                                    marginB,
                                                    width,
                                                    widthMedium,
                                                    widthLarge,
                                                    widthXLarge,
                                                    width2XLarge
                                                },
                                                ...on craft_block_button_BlockType {
                                                    typeHandle,
                                                    text,
                                                    href,
                                                    hrefTarget,
                                                    shadow,
                                                    rounded,
                                                    buttonColor
                                                    buttonSize,
                                                    marginT,
                                                    marginB,
                                                    width,
                                                    widthMedium,
                                                    widthLarge,
                                                    widthXLarge,
                                                    width2XLarge,
                                                    fontSize,
                                                    fontSizeMedium,
                                                    fontSizeLarge,
                                                    fontSizeXLarge,
                                                    fontSize2XLarge,
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</page-query>
