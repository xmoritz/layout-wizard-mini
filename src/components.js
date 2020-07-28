import React from 'react';
import { useState } from 'react';

export const LayoutCard = (props) => {
  if (props.variation === 1) {
    return (
      <div className={props.colors ? "LayoutCard LayoutCard--1 LayoutCard--color-" + props.colors : "LayoutCard LayoutCard--1"} onClick={props.onClick}>
        <div className="LayoutCard-header">{props.tagline ? props.tagline : 'Tagline'}</div>
        <div className="LayoutCard-body"></div>
        <div className="LayoutCard-footer"></div>
      </div>
    )
  } else if (props.variation === 2) {
    return (
      <div className={props.colors ? "LayoutCard LayoutCard--2 LayoutCard--color-" + props.colors : "LayoutCard LayoutCard--2"} onClick={props.onClick}>
        <div className="LayoutCard-header"></div>
        <div className="LayoutCard-body">{props.tagline ? props.tagline : 'Tagline'}</div>
        <div className="LayoutCard-footer"></div>
      </div>
    )
  } else if (props.variation === 3) {
    return (
      <div className={props.colors ? "LayoutCard LayoutCard--3 LayoutCard--color-" + props.colors : "LayoutCard LayoutCard--3"} onClick={props.onClick}>
        <div className="LayoutCard-header"></div>
        <div className="LayoutCard-body"></div>
        <div className="LayoutCard-footer">{props.tagline ? props.tagline : 'Tagline'}</div>
      </div>
    )
  } else {
    return (
      <div>Choose Layout</div>
    )
  }
}

export const ColorMix = (props) => {
  if (props.variation === 1) {
    return (
      <div className="ColorMix ColorMix--1" onClick={props.onClick}>
        <div className="ColorMix-top"></div>
        <div className="ColorMix-mid"></div>
        <div className="ColorMix-bottom"></div>
      </div>
    )
  } else if (props.variation === 2) {
    return (
      <div className="ColorMix ColorMix--2" onClick={props.onClick}>
        <div className="ColorMix-top"></div>
        <div className="ColorMix-mid"></div>
        <div className="ColorMix-bottom"></div>
      </div>
    )
  } else if (props.variation === 3) {
    return (
      <div className="ColorMix ColorMix--3" onClick={props.onClick}>
        <div className="ColorMix-top"></div>
        <div className="ColorMix-mid"></div>
        <div className="ColorMix-bottom"></div>
      </div>
    )
  }
}

export const Tagline = (props) => {
  if (props.variation === 1) {
    return (
      <div className="Tagline Tagline--1" onClick={props.onClick}>
        Hip!
      </div>
    )
  } else if (props.variation === 2) {
    return (
      <div className="Tagline Tagline--2" onClick={props.onClick}>
        So Fresh!
      </div>
    )
  } else if (props.variation === 3) {
    return (
      <div className="Tagline Tagline--3" onClick={props.onClick}>
        Super!
      </div>
    )
  }
}

export const Taglines = (props) => {
  return (
    <div className="Taglines">
      Tagline 1:
      <Tagline variation={1} onClick={() => props.setTaglineStatus('Hip!')} />
      <br />
      Tagline 2:
      <Tagline variation={2} onClick={() => props.setTaglineStatus('So Fresh!')} />
      <br />
      Tagline 3:
      <Tagline variation={3} onClick={() => props.setTaglineStatus('Super!')} />
    </div>
  )
}

export const ColorMixes = (props) => {
  return (
    <div className="Colors">
      Colors 1:
      <ColorMix variation={1} onClick={() => props.setColorsStatus(1)} />
      <br />
      Colors 2:
      <ColorMix variation={2} onClick={() => props.setColorsStatus(2)} />
      <br />
      Colors 3:
      <ColorMix variation={3} onClick={() => props.setColorsStatus(3)} />
    </div>
  )
}

export const Layouts = (props) => {
  return (
    <div className="Layouts">
      Layout 1:
      <LayoutCard variation={1} onClick={() => props.setLayoutStatus(1)} />
      <br />
      Layout 2:
      <LayoutCard variation={2} onClick={() => props.setLayoutStatus(2)} />
      <br />
      Layout 3:
      <LayoutCard variation={3} onClick={() => props.setLayoutStatus(3)} />
    </div>
  )
}

export const Menu = (props) => {

  return (
    <div className="Menu">
      <div className="Menu-item" onClick={() => props.setMenuStatus('layout')}>Layout</div>
      <div className="Menu-divider"></div>
      <div className="Menu-item" onClick={() => props.setMenuStatus('colors')}>Colors</div>
      <div className="Menu-divider"></div>
      <div className="Menu-item" onClick={() => props.setMenuStatus('tagline')}>Tagline</div>
    </div>
  )
}

export const Result = (props) => {
  return (
    <div className="Result">
      <LayoutCard variation={props.layoutVariation} colors={props.colorsVariation} tagline={props.taglineVariation} />
    </div>
  )
}

// export default LayoutCard;