import useFrontMatter from "@theme/useFrontMatter";
import React from "react";

const baseAuthors = {
    plaosunthara: {
        name: "Pawarit Laosunthara",
        title: "Curator",
        url: "https://github.com/pawaritl",
        imageURL: "https://github.com/pawaritl.png"
    },
    kmok: {
        name: "Kelsey Beyer",
        title: "Curator",
        url: "https://github.com/kelseymok",
        imageURL: "https://github.com/kelseymok.png"
    },
    syed: {
        name: "Syed Ali Masroor Rizvi",
        title: "Curator",
        url: "https://github.com/syed-tw",
        imageURL: "https://github.com/syed-tw.png"
    },
    tklae: {
        name: "Tim Kläsener",
        title: "Curator",
        url: "https://github.com/tklae",
        imageURL: "https://github.com/tklae.png"
    },
    richard: {
        name: "Richard Borschke",
        title: "Contributor",
        url: "https://github.com/richardbor",
        imageURL: "https://github.com/richardbor.png"
    },
    kris: {
        name: "Kris Simon",
        title: "Curator",
        url: "https://github.com/petershaw",
        imageURL: "https://github.com/petershaw.png"
    }
}

// From: https://github.com/facebook/docusaurus/blob/9af32ae0d540a802be8807d8498c808e569c820e/packages/docusaurus-plugin-content-blog/src/authors.ts#L121
export default function Authors({children, authors}) {
    const frontMatterAuthors = authors || useFrontMatter()['authors'];
    if (frontMatterAuthors && frontMatterAuthors.length > 0) {
        const mappedAuthors = getFrontMatterAuthors(baseAuthorsMap, frontMatterAuthors)
        if (mappedAuthors.length > 0) {
            return (
                <div className="margin-top--md margin-bottom--sm row">
                    {mappedAuthors.map((props, idx) => (
                        <Author key={idx} {...props} />
                    ))}
                </div>);
        }
    }
    return null;
}

const baseAuthorsMap = new Map(Object.entries(baseAuthors));

function getFrontMatterAuthors(authorsMap, frontMatterAuthors) {
    function getAuthorsMapAuthor(key) {
        if (key) {
            if (!authorsMap || authorsMap.keys().length === 0) {
                throw new Error(`Can't reference blog post authors by a key (such as '${key}')`);
            }
            const author = authorsMap.get(key);
            if (!author) {
                // throw Error(`Blog author with key "${key}" not found in the authors map file.
                // Valid author keys are:
                // ${Object.keys(authorsMap).join('\n')}`);
            }
            return author;
        } else {
            return undefined
        }
    }

    function toAuthor(frontMatterAuthor) {
        const a = getAuthorsMapAuthor(frontMatterAuthor)
        return a
    }

    return frontMatterAuthors.map(toAuthor).filter(function( element ) {
        return element !== undefined;
    });
}

function Author({name, title, url, imageURL}) {
    return (
        <div key={name} className="col col--6 authorCol_node_modules-@docusaurus-theme-classic-lib-theme-BlogPostItem-Header-Authors-styles-module" >
            <div className="avatar margin-bottom--sm" >
                <a href={imageURL} target="_blank" rel="noopener noreferrer" className="avatar__photo-link">
                    <img className="avatar__photo" src={imageURL} alt={name}></img>
                </a>
                <div className="avatar__intro" itemProp="author" itemScope="" itemType="https://schema.org/Person">
                    <div className="avatar__name">
                        <a href={url} target="_blank" rel="noopener noreferrer" itemProp="url">
                            <span itemProp="name">{name}</span>
                        </a>
                    </div>
                    <small className="avatar__subtitle" itemProp="description">{title}</small>
                </div>
            </div>
        </div>
    );
}
