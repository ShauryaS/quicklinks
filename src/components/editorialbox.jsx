import React from 'react'
import SVG from 'react-inlinesvg'
import { useReducedMotion } from 'framer-motion'

import quickLinksInfo from '@/data/quicklinksinfo.json'
import * as ga from '@/lib/ga'

import {
  Page,
  Column,
  Photo,
  Wordmark,
  Name,
  Role,
  MetaLine,
  Eyebrow,
  LinkList,
  LinkRow,
  IconWrap,
  RowName,
  Arrow,
  Footer,
} from '@/styles/components/editorialbox'

/**
 * Editorial theme layout: a single minimal column — identity header, a list of
 * bordered link rows, and a footer. Mirrors the design language of the main
 * shauryas.io site. Content comes from quicklinksinfo.json; colors follow the
 * OS light/dark preference via the CSS-variable tokens in globals.css.
 */
function EditorialBox() {
  const reduce = useReducedMotion()

  const { wordmark, name, role, meta, image, quicklinks_data: links } =
    quickLinksInfo

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : 0.06,
        delayChildren: reduce ? 0 : 0.05,
      },
    },
  }

  const item = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 12 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] },
        },
      }

  function trackClick(name, link) {
    ga.event({
      action: 'outgoing_link',
      params: { name, url: link },
    })
  }

  return (
    <Page>
      <Column variants={container} initial="hidden" animate="show">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Photo
          variants={item}
          src={image}
          alt={'Portrait of ' + name}
          width={64}
          height={64}
        />

        {wordmark && <Wordmark variants={item}>{wordmark}</Wordmark>}

        <Name variants={item}>{name}</Name>

        {role && (
          <Role variants={item}>
            {role.title} <span>at</span>{' '}
            <a href={role.companyUrl} target="_blank" rel="noopener noreferrer">
              {role.company}
            </a>
          </Role>
        )}

        {meta && <MetaLine variants={item}>{meta}</MetaLine>}

        <Eyebrow variants={item}>Links</Eyebrow>

        <LinkList aria-label="Links">
          {links.map((linkItem) => (
            <LinkRow
              key={linkItem.name}
              variants={item}
              href={linkItem.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick(linkItem.name, linkItem.link)}
            >
              {linkItem.image && (
                <IconWrap>
                  <SVG src={linkItem.image} />
                </IconWrap>
              )}
              <RowName>{linkItem.name}</RowName>
              <Arrow>↗</Arrow>
            </LinkRow>
          ))}
        </LinkList>

        <Footer variants={item}>
          <span>
            © {new Date().getFullYear()} {name}
          </span>
          <span>Created with ☕️ · shauryas.io</span>
        </Footer>
      </Column>
    </Page>
  )
}

export default EditorialBox
