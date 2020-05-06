<template>
    <div>
        ahoj
    </div>
</template>

<script>
export default {

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
                                                    color,
                                                    marginT,
                                                    marginB,
                                                }
                                                ...on craft_block_image_BlockType {
                                                    typeHandle,
                                                    img {url}
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
                                                    color,
                                                    bgColor,
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
                                            blocks: children {
                                                ...on craft_block_headline_BlockType {
                                                    typeHandle,
                                                    textRedactor,
                                                    headline,
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
                                                    color,
                                                    marginT,
                                                    marginB,
                                                }
                                                ...on craft_block_image_BlockType {
                                                    typeHandle,
                                                    img {url}
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
                                                    color,
                                                    bgColor,
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
                                            blocks: children {
                                                ...on craft_block_headline_BlockType {
                                                    typeHandle,
                                                    textRedactor,
                                                    headline,
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
                                                    color,
                                                    marginT,
                                                    marginB,
                                                }
                                                ...on craft_block_image_BlockType {
                                                    typeHandle,
                                                    img {url}
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
                                                    color,
                                                    bgColor,
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
                                            blocks: children {
                                                ...on craft_block_headline_BlockType {
                                                    typeHandle,
                                                    textRedactor,
                                                    headline,
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
                                                    color,
                                                    marginT,
                                                    marginB,
                                                }
                                                ...on craft_block_image_BlockType {
                                                    typeHandle,
                                                    img {url}
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
                                                    color,
                                                    bgColor,
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
                                            blocks: children {
                                                ...on craft_block_headline_BlockType {
                                                    typeHandle,
                                                    textRedactor,
                                                    headline,
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
                                                    color,
                                                    marginT,
                                                    marginB,
                                                }
                                                ...on craft_block_image_BlockType {
                                                    typeHandle,
                                                    img {url}
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
                                                    color,
                                                    bgColor,
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
                                            blocks: children {
                                                ...on craft_block_headline_BlockType {
                                                    typeHandle,
                                                    textRedactor,
                                                    headline,
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
                                                    color,
                                                    marginT,
                                                    marginB,
                                                }
                                                ...on craft_block_image_BlockType {
                                                    typeHandle,
                                                    img {url}
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
                                                    color,
                                                    bgColor,
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
                                            blocks: children {
                                                ...on craft_block_headline_BlockType {
                                                    typeHandle,
                                                    textRedactor,
                                                    headline,
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
                                                    color,
                                                    marginT,
                                                    marginB,
                                                }
                                                ...on craft_block_image_BlockType {
                                                    typeHandle,
                                                    img {url}
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
                                                    color,
                                                    bgColor,
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
                                            blocks: children {
                                                ...on craft_block_headline_BlockType {
                                                    typeHandle,
                                                    textRedactor,
                                                    headline,
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
                                                    color,
                                                    marginT,
                                                    marginB,
                                                }
                                                ...on craft_block_image_BlockType {
                                                    typeHandle,
                                                    img {url}
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
                                                    color,
                                                    bgColor,
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
                                            blocks: children {
                                                ...on craft_block_headline_BlockType {
                                                    typeHandle,
                                                    textRedactor,
                                                    headline,
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
                                                    color,
                                                    marginT,
                                                    marginB,
                                                }
                                                ...on craft_block_image_BlockType {
                                                    typeHandle,
                                                    img {url}
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
                                                    color,
                                                    bgColor,
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
                                            blocks: children {
                                                ...on craft_block_headline_BlockType {
                                                    typeHandle,
                                                    textRedactor,
                                                    headline,
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
                                                    color,
                                                    marginT,
                                                    marginB,
                                                }
                                                ...on craft_block_image_BlockType {
                                                    typeHandle,
                                                    img {url}
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
                                                    color,
                                                    bgColor,
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
