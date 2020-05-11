const widthSizes = `
    width,
    widthMedium,
    widthLarge,
    widthXLarge,
    width2XLarge
`;

const fontSizes = `
    fontSize,
    fontSizeMedium,
    fontSizeLarge,
    fontSizeXLarge,
    fontSize2XLarge
`;

const blockSettings = `
    rounded,
    shadow`
;

const target = `
    href,
    hrefTarget
`;

const marginTB = `
    marginT,
    marginB
`;

const blocks = `
    ...on craft_block_headline_BlockType {
        typeHandle,
        textRedactor,
        headline,
        color,
        ${marginTB},
        ${fontSizes},
    },
    ...on craft_block_wysiwyg_BlockType {
        typeHandle,
        wysiwyg,
        color,
        ${marginTB},
        ${fontSizes},
    },
    ...on craft_block_hr_BlockType {
        typeHandle,
        color,
        ${marginTB},
    }
    ...on craft_block_image_BlockType {
        typeHandle,
        img {url}
        aspectRatio,
        ${target},
        imgSize,
        ${blockSettings},
        ${marginTB},
        ${widthSizes},
    },
    ...on craft_block_button_BlockType {
        typeHandle,
        text,
        ${target},
        color,
        bgColor,
        buttonSize,
        ${marginTB},
        ${widthSizes},
        ${fontSizes},
    }
`

const columnCustom = `
    ...on craft_block_columnCustom_BlockType {
        typeHandle
        ${blockSettings},
        ${widthSizes},
        img {url},
        blocks: children {
            ${blocks}
        }
    }
`;

const columnBreak = `
    ...on craft_block_columnBreak_BlockType {
        typeHandle
    }
`;

const columnDefined = `
    ...on craft_block_columnDefined_BlockType {
        typeHandle,
        marginX,
        marginY,
        padding,
        ${blockSettings},
        bgColor,
        blocks: children {
            ${blocks}
        }
    }
`;

const layoutCustom = `
    ...on craft_block_layoutCustom_BlockType {
        typeHandle,
        columns: children {
           ${columnBreak},
           ${columnCustom}
        }
    }
`;

const layoutDefined = `
    ...on craft_block_layoutFull_BlockType {
        typeHandle
        columns: children {
            ${columnDefined}
        }
    },
    ...on craft_block_layoutHalfCenter_BlockType {
        typeHandle
        columns: children {
            ${columnDefined}
        }
    },
    ...on craft_block_layoutTwoTwoHalf_BlockType {
        typeHandle
        columns: children {
            ${columnDefined}
        }
    },
    ...on craft_block_layoutThreeThird_BlockType {
        typeHandle
        columns: children {
            ${columnDefined}
        }
    },
    ...on craft_block_layoutThirdCenter_BlockType {
        typeHandle
        columns: children {
            ${columnDefined}
        }
    },
    ...on craft_block_layoutFourQuarter_BlockType {
        typeHandle
        columns: children {
            ${columnDefined}
        }
    },
    ...on craft_block_layoutTwoThirdCenter_BlockType {
        typeHandle
        columns: children {
            ${columnDefined}
        }
    },
    ...on craft_block_layoutThirdAndTwoThirds_BlockType {
        typeHandle
        columns: children {
            ${columnDefined}
        }
    },
    ...on craft_block_layoutTwoThirdsAndThird_BlockType {
        typeHandle
        columns: children {
            ${columnDefined}
        }
    }
`;

export const containerBlockGraphQL = `
    ...on craft_block_container_BlockType {
        typeHandle
        bgColor,
        img {url},
        bgColorContainer,
        imgContainer {url},
        marginY,
        ${blockSettings},
        rows: children {
            ${layoutCustom},
            ${layoutDefined}
        }
    }
`;


module.exports = containerBlockGraphQL;
