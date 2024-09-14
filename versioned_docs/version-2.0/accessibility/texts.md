---
sidebar_position: 3
minutesToComplete: 15
---

# Text accessibility for data engineering and presentation

When working with or presenting data or data related information, it's a good idea to adhere to proven accessibility 
principles. These standards are inspired by web design accessibility practices as well as standards from print to 
ensure that all users, including those with disabilities, can access and comprehend the content we present.  

Text accessibility focuses on making written content easy to read and understand for everyone, regardless of their 
physical or cognitive abilities. This includes considering visual impairments, cognitive challenges, and language 
barriers.   

Let's have a look at different elements of text accessibility, provide practical guidelines for improving the 
readability and usability of our content, and explain why each point is important.

## Text Size and Adjustability

### Size Matters

The size of the presented text is fundamental to accessibility. Small text can be difficult to read, especially for 
users with visual impairments. Larger text is easier to read, reducing eye strain and making it accessible to a wider 
audience.   

It can be helpful to give context to the data, without context you may lose your audience. Delight your readers with 
easy-to-read texts and don't tire them out.   

This applies both to descriptive content and to legends, notes and information.

### Adjustable Text Size
Allowing users to change the text size to suit their preferences is essential. This supports users with varying degrees 
of visual impairment and those who prefer larger text for comfort. Text resizing should not break the layout of your 
presentation. Remember that the text should enrich your data and diagrams, so they should be in focus. Consider 
resizing these elements along with the text.

- **Good Example**: Using relative units like `font-size: 1em;` so users can adjust text size via browser settings.
- **Bad Example**: Using fixed units like `font-size: 12px;` which doesn't scale with user preferences.

## Choosing the Right Font

### Font Selection
The type of font used can significantly impact readability. Sans-serif fonts, such as Arial, Helvetica, and Verdana, 
are generally easier to read on screens compared to serif fonts. Avoiding overly decorative fonts ensures the text is 
straightforward and readable.

There are also fonts that are specifically designed with accessibility in mind, such as "[Atkinson Hyperlegible](https://brailleinstitute.org/freefont)" or "[OpenDyslexic](https://opendyslexic.org/)".

- **Good Example**: Using a Sans-serif font for body text.
- **Bad Example**: Using a decorative font like Comic Sans or a complex script font for body text.

### Formatting for Clarity
Text formatting should be clean and straightforward. Adequate line spacing and high contrast between text and 
background enhance readability, particularly for users with visual impairments or dyslexia. But even for those who 
read for longer, it becomes less tiring to read texts with high contrast.

- **Good Example**: Text with line spacing set to 1.4 and high contrast colors (black text on a white background).
- **Bad Example**: Text with minimal line spacing and low contrast colors (light gray text on a white background).

## Consistency and Clear Markup

### Consistent Markup
Using consistent markup for headings, paragraphs, lists, and other elements helps screen readers understand the 
structure of the content. This aids navigation and comprehension for users relying on assistive technologies. Keeping 
this in mind, it also helps you to write information in a structured order that leads to better understandable content.

- **Good Example**: Using `<h1>` for the main title, `<h2>` for section headings, and `<p>` for paragraphs.
- **Bad Example**: Using `<div>` tags with classes to style text, without semantic meaning.

### Concise and Understandable Formatting
Keeping the text concise and to the point makes information easier to digest. Using bullet points and numbered lists 
breaks up large blocks of text, which is beneficial for all users, especially those with cognitive impairments.

- **Good Example**: Using bullet points for lists and keeping paragraphs short.
- **Bad Example**: Long, unbroken paragraphs filled with complex sentences.

Distinguish between ordered and unordered lists to provide structural information about the content.

## Language and Target Audience

### Language Settings
Setting the language of the presentation (eg. a web page) correctly using the lang attribute in HTML helps screen 
readers pronounce words correctly and provides context for translations. This also applies to PDFs and other formats. 
This improves the experience for non-native speakers and those using translation tools.

- **Good Example**: `<html lang="en">`
- **Bad Example**: `<html>`, without specifying the language.

Pay attention to the metadata of the elements and of the overall document. They are just as important as the content 
itself. Especially when a reader uses technology to support the eyes.

### Supported Translations
Knowing your audience and where they are coming from helps to determine if the content should be translated and which 
languages should be supported. Accurate translations ensure that non-native speakers can understand and engage with 
your content just as well as native speakers.

In times when we are close to the babelfish, this requirement increases. Make sure that your text can be translated 
automatically.

- **Good Example**: Providing content in multiple languages written by native speakers (if possible).
- **Bad Example**: Offering no translation or only poor machine translations that are difficult to understand.

Providing texts in e.g. fluent English and fluent Spanish improves the possibility of translating the same text into 
e.g. Japanese, as the meaning of the words is more accurate than if the text is written only by a native English speaker.

### Depth of Explanations
Providing explanations that match your target audience's knowledge level is crucial. Offering expandable sections or 
links to more detailed information caters to both novice and experienced users.

- **Good Example**: Using simple explanations with links to more detailed content.
- **Bad Example**: Using complex explanations without additional context or simpler alternatives or use one large text 
- block that repeats itself over and over in boring language.

### Easy Language
Using plain language and short sentences ensures the content is accessible to a wider audience, including those with 
cognitive impairments or lower literacy levels. Complex words and sentence structures can alienate or confuse users. 
This does not imply that the text must get boring. Sometimes nested sentences don't give more information, but hide 
essential information behind clever-sounding phrases.

In certain cases, not using a domain specific language  and instead trying to specifically avoid the common words or 
names can lead to misunderstandings, especially when talking to a more advanced audience.

- **Good Example**: "The personal information of 20 Million people was stolen in the breach."
- **Bad Example**: "Through a series of using a chain of specific 0-days the intruders were able to obtain PII from 
- CRM systems leading to the exposure of a data set of more than 20 Million unique entries."

### Avoiding Jargon and Pop Culture References
Avoiding industry jargon, technical terms, and pop culture references ensures the content is understandable to everyone, 
not just experts or culturally specific groups. When it comes to very specific terms or jargon that cannot be avoided, 
clear definitions should be provided or further explanations added. When presenting to audiences, we have a tendency to 
want to look smart and include more technical terms, even though this might lead to parts of the audience feeling left 
out.

- **Good Example**: "We formatted the data in a way to show rainfall in given months in the following graph."
- **Bad Example**: "We dissected the Pandas dataframe using a splice operation to display the rain/month ratio on this 
- Plotly polyline mark."

### Explaining Abbreviations
Abbreviations should be spelled out in full the first time they are used to help all users understand them, including 
those who may not be familiar with the terms. This practice aids comprehension and inclusivity.

- **Good Example**: "HyperText Markup Language (HTML) is used to create web pages."
- **Bad Example**: "HTML is used to create web pages." (without explaining HTML)

## Reading Level

### Appropriate Reading Level
Writing at a reading level that matches your target audience ensures that the content is accessible to most users. Tools 
like the Flesch-Kincaid or LIX readability tests can help ensure your text is suitable. Generally, content should be 
accessible to users with a 6th to 8th-grade reading level. In some instances, it might make sense to provide different
variations of a text for different target audiences but usually it is preferred to provide a single version of the 
content that can be understood by everyone.

- **Good Example**: This sentence shows the point when you read it.
- **Bad Example**: This sentence, taken as a reading passage unto itself, is being used to prove a point.

## Text-to-Speech and Navigation

### Text-to-Speech Compatibility
Ensuring your website is compatible with text-to-speech (TTS) software makes your content accessible to users with 
visual impairments or reading difficulties. Proper HTML markup 
using [semantic HTML](https://www.w3schools.com/html/html5_semantic_elements.asp) ensures TTS programs can accurately 
interpret and vocalize the content.

- **Good Example**: Using semantic HTML elements and ARIA labels to enhance TTS functionality.
- **Bad Example**: Using non-semantic tags (like only divs) and lacking ARIA labels, confusing TTS programs.

> Did you know: iOS has an embedded text-to-speech reader you can turn on with a two-finger swipe-down gesture.
> On Android there is also an accessibility function when you hold both volume buttons down for 3 seconds.

### Reader Support and Navigation Jumps
On websites, including features like [skip links](https://www.w3schools.com/accessibility/accessibility_skip_links.php) 
allows users to jump directly to the main content, supporting easier navigation for screen reader users and those using 
keyboard navigation. Use a descriptive navigation text that precisely describes the content. This improves the overall 
user experience.

- **Good Example**: Providing a "Skip to main content" link at the top of the page.
- **Bad Example**: Forcing users to tab through an entire navigation menu before reaching the main content.
- **Bad Example**: Having the tab order set incorrectly which makes users using keyboard navigation jump all over the 
- place or start at the bottom of the conent.

## Additional Features

### Summaries and optional content
Summaries at the top and/or bottom of longer paragraphs or the whole content can help to double check if the information 
was understood correctly or provide alternative phrasing. Trade-offs have to be made to not repeat the same points too 
often or unnecessarily bloat the content.

It has proven to be a good idea to start with a "Management Summary" paragraph stating what the text is all about and 
what topics it will cover, and end with a bullet point list summarizing the content.

Content that is optional should be thought about: In some cases it pays of to not include it at all, in other 
circumstances it makes sense to keep it but mark it as optional.

### Print Preview
Providing a print-friendly version of your information ensures that all users can easily print and read the content 
offline without losing important information. Print stylesheets can format content appropriately.

- **Good Example**: Offering a print stylesheet that formats only the relevant content appropriately for printing.
- **Bad Example**: Printing the whole page as it appears on the screen, which may include unnecessary navigation menus 
- and advertisements.

### Following Disability Language Style Guide
The language we use should be respectful and inclusive. Using person-first language and avoiding outdated or offensive 
terms helps to create a more inclusive environment.

- **Good Example**: "Person with a disability" (people-first language) or "disabled person" (identity-first language).
- **Bad Example**: "Handicapped" or other outdated terms.

[Link to a disability language style guide](https://ncdj.org/style-guide/)

### Providing Full Link Text
On websites, using descriptive link text instead of vague phrases helps users understand the purpose and destination of 
the link. This practice enhances navigation and accessibility, particularly for screen reader users.

- **Good Example**: "Learn more about our accessibility features."
- **Bad Example**: "Click here."

