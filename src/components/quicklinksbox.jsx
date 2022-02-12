import React from 'react'

import {
  QuickLinksDiv,
  QuickLinksBoxDiv,
  QuickLinksContentsDiv,
  QuickLinksHeaderDiv,
  QuickLinksItemsDiv,
  QuickLinksCopyrightDiv,
  MainImageSection,
  MainImageDiv,
  NameDiv,
  Name,
  LinkItemDiv,
  LinkedItemImageDiv,
  LinkItemText,
  CopyrightText,
  SiteLinkText,
} from '@/styles/components/quicklinksbox'

import SVG from 'react-inlinesvg'

import Image from 'next/image'

import quickLinksInfo from '@/data/quicklinksinfo.json'

import * as ga from '@/lib/ga'

function QuickLinksItem(props) {
  const name = props.name
  const link = props.link
  const image = props.image

  function goToLink() {
    ga.event({
      action: 'outgoing_link',
      params: {
        name: name,
        url: link,
      },
    })
    window.open(link, '_blank')
  }

  return (
    <LinkItemDiv onClick={goToLink}>
      <LinkedItemImageDiv>
        <SVG src={image} />
      </LinkedItemImageDiv>
      <LinkItemText>{name}</LinkItemText>
    </LinkItemDiv>
  )
}

function QuickLinksBox() {
  const data = quickLinksInfo.quicklinks_data

  function goToLink(url) {
    window.open(url, '_blank')
  }

  return (
    <>
      <QuickLinksDiv id="quick-links-background">
        <QuickLinksBoxDiv>
          <QuickLinksContentsDiv>
            <QuickLinksHeaderDiv>
              <MainImageSection>
                <MainImageDiv>
                  <Image
                    src={quickLinksInfo.image}
                    blurDataURL={quickLinksInfo.image}
                    alt={'Photo of ' + quickLinksInfo.name}
                    width={100}
                    height={100}
                    placeholder="blur"
                    priority
                  />
                </MainImageDiv>
              </MainImageSection>
              <NameDiv>
                <Name>{quickLinksInfo.name}</Name>
              </NameDiv>
            </QuickLinksHeaderDiv>
            <QuickLinksItemsDiv>
              {data.map((item, _) => (
                <QuickLinksItem
                  name={item.name}
                  link={item.link}
                  key={item.name}
                  image={item.image}
                />
              ))}
            </QuickLinksItemsDiv>
            <QuickLinksCopyrightDiv>
              <CopyrightText>
                &copy; 2022, {quickLinksInfo.name}. All rights reserved.
                <br />
                <br />
                Quicklinks template from{' '}
                <SiteLinkText
                  onClick={() =>
                    goToLink('https://github.com/ShauryaS/quicklinks')
                  }
                >
                  ShauryaS/quicklinks
                </SiteLinkText>
              </CopyrightText>
            </QuickLinksCopyrightDiv>
          </QuickLinksContentsDiv>
        </QuickLinksBoxDiv>
      </QuickLinksDiv>
    </>
  )
}

export default QuickLinksBox
