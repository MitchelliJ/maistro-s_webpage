/* @ds-bundle: {"format":4,"namespace":"MaistrosDesignSystem_d1f3c1","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"RhythmRule","sourcePath":"components/core/RhythmRule.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"LogoIcon","sourcePath":"components/core/Wordmark.jsx"},{"name":"CountIn","sourcePath":"components/feedback/CountIn.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"a8854dded861","components/core/Button.jsx":"4ed9b30171e8","components/core/Card.jsx":"69309c6efebd","components/core/Icon.jsx":"5307f4c7c8d3","components/core/IconButton.jsx":"b492c4690213","components/core/RhythmRule.jsx":"232d7c2a43b1","components/core/Tag.jsx":"0474f9f0871c","components/core/Wordmark.jsx":"d1de3e9497f3","components/feedback/CountIn.jsx":"7d4c09cec711","components/feedback/Dialog.jsx":"751a840ca0af","components/feedback/Toast.jsx":"83d63e48a873","components/feedback/Tooltip.jsx":"4840949e84ae","components/forms/Checkbox.jsx":"72b6b1485d43","components/forms/Field.jsx":"ae36b51b7577","components/forms/Input.jsx":"3aafbfbd3df8","components/forms/Radio.jsx":"1abc34d52b74","components/forms/Select.jsx":"d7b202b33b3a","components/forms/Switch.jsx":"a410c38d1759","components/navigation/Tabs.jsx":"f112a573f9e8","ui_kits/website/AdviesScreen.jsx":"946ce06adf79","ui_kits/website/AgentsScreen.jsx":"d88fce733f15","ui_kits/website/HomeScreen.jsx":"ba24dda91c44","ui_kits/website/OverScreen.jsx":"b4616126f664","ui_kits/website/PowerAIScreen.jsx":"a48c85dd288b","ui_kits/website/SiteChrome.jsx":"593fd7ac65aa"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MaistrosDesignSystem_d1f3c1 = window.MaistrosDesignSystem_d1f3c1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    bg: 'var(--paper-sunk)',
    fg: 'var(--graphite)',
    bd: 'var(--hairline)'
  },
  structure: {
    bg: 'rgba(22,167,155,.12)',
    fg: '#0B6F67',
    bd: 'rgba(22,167,155,.35)'
  },
  field: {
    bg: 'var(--deep-teal)',
    fg: 'var(--chalk)',
    bd: 'transparent'
  },
  accent: {
    bg: 'var(--orange)',
    fg: 'var(--paper)',
    bd: 'transparent'
  }
};
function Badge({
  children,
  tone = 'neutral',
  size = 'md',
  style,
  className,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-1)',
      padding: size === 'sm' ? '2px 8px' : '4px 10px',
      fontFamily: 'var(--font-text)',
      fontSize: size === 'sm' ? 12 : 'var(--size-small)',
      fontWeight: 'var(--weight-strong)',
      lineHeight: 1.4,
      background: t.bg,
      color: t.fg,
      border: `var(--border-hair) solid ${t.bd}`,
      borderRadius: 'var(--radius-xs)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  variant = 'hairline',
  ground = 'paper',
  interactive,
  padding = 'var(--card-pad)',
  eyebrow,
  title,
  as = 'div',
  href,
  style,
  className,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const Tag = href ? 'a' : as;
  const dark = ground === 'dark';
  const bg = variant === 'sunk' ? dark ? '#083732' : 'var(--paper-sunk)' : variant === 'field' ? 'var(--deep-teal)' : dark ? 'var(--dark-surface-card)' : '#FFFFFF';
  const onField = variant === 'field';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: className,
    href: href,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      display: 'block',
      padding,
      background: bg,
      border: `var(--border-hair) solid ${onField ? 'transparent' : dark ? 'var(--dark-border-hairline)' : 'var(--hairline)'}`,
      borderRadius: 'var(--radius-lg)',
      color: onField || dark ? 'var(--chalk)' : 'var(--graphite)',
      textDecoration: 'none',
      boxShadow: interactive && hovered ? 'var(--shadow-raised)' : 'var(--shadow-none)',
      borderColor: interactive && hovered && !onField ? 'var(--turquoise)' : undefined,
      transform: interactive && hovered ? 'translateY(-2px)' : 'none',
      transition: 'transform var(--transition-base), border-color var(--transition-hover), box-shadow var(--transition-hover)',
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-small)',
      fontWeight: 'var(--weight-strong)',
      color: onField || dark ? 'var(--turquoise)' : 'var(--turquoise)',
      marginBottom: 'var(--space-2)'
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: 'var(--space-3)',
      color: onField || dark ? '#FFFFFF' : 'var(--deep-teal)'
    }
  }, title) : null, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const pascal = n => String(n).replace(/(^|[-_ ])(\w)/g, (_, __, c) => c.toUpperCase());

// Lucide matches the brand icon spec exactly: 24px grid, 2px stroke, round caps and joins.
// The set is loaded from the lucide UMD CDN build; see readme.md > Iconography.
function useLucide() {
  const [ready, setReady] = React.useState(() => !!(typeof window !== 'undefined' && window.lucide));
  React.useEffect(() => {
    if (ready || typeof window === 'undefined') return;
    const id = setInterval(() => {
      if (window.lucide) {
        setReady(true);
        clearInterval(id);
      }
    }, 60);
    return () => clearInterval(id);
  }, [ready]);
  return ready;
}
function Icon({
  name,
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  title,
  style,
  className,
  ...rest
}) {
  const ready = useLucide();
  const set = ready ? window.lucide.icons || window.lucide : null;
  let node = set ? set[pascal(name)] : null;
  if (node && node[0] === 'svg') node = node[2];
  const children = Array.isArray(node) ? node : [];
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": title ? undefined : true,
    role: title ? 'img' : undefined,
    style: {
      display: 'block',
      flex: '0 0 auto',
      ...style
    }
  }, rest), title ? /*#__PURE__*/React.createElement("title", null, title) : null, children.map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const H = {
  sm: 'var(--control-h-sm)',
  md: 'var(--control-h-md)',
  lg: 'var(--control-h-lg)'
};
const PAD = {
  sm: '0 14px',
  md: '0 20px',
  lg: '0 26px'
};
const FS = {
  sm: 14,
  md: 16,
  lg: 17
};
function skin(variant, ground, hovered, pressed) {
  const dark = ground === 'dark';
  if (variant === 'primary') {
    const bg = pressed ? 'var(--deep-teal-press)' : hovered ? 'var(--deep-teal-hover)' : 'var(--deep-teal)';
    return dark ? {
      background: pressed ? 'var(--paper-sunk)' : 'var(--paper)',
      color: 'var(--deep-teal)',
      border: '2px solid transparent'
    } : {
      background: bg,
      color: 'var(--paper)',
      border: '2px solid transparent'
    };
  }
  if (variant === 'accent') {
    return {
      background: pressed ? 'var(--orange-press)' : hovered ? 'var(--orange-hover)' : 'var(--orange)',
      color: 'var(--paper)',
      border: '2px solid transparent'
    };
  }
  if (variant === 'secondary') {
    return dark ? {
      background: hovered ? 'rgba(250,246,241,.08)' : 'transparent',
      color: 'var(--paper)',
      border: '2px solid var(--turquoise)'
    } : {
      background: hovered ? 'rgba(22,167,155,.08)' : 'transparent',
      color: 'var(--deep-teal)',
      border: '2px solid var(--turquoise)'
    };
  }
  return {
    background: 'transparent',
    color: dark ? 'var(--paper)' : 'var(--deep-teal)',
    border: '2px solid transparent',
    textDecorationLine: hovered ? 'underline' : 'none',
    textDecorationColor: 'var(--turquoise)',
    textUnderlineOffset: '4px'
  };
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  ground = 'paper',
  icon,
  iconPosition = 'right',
  fullWidth,
  disabled,
  as = 'button',
  href,
  onClick,
  type = 'button',
  style,
  className,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const Tag = href ? 'a' : as;
  const s = skin(variant, ground, hovered && !disabled, pressed && !disabled);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: className,
    href: href,
    type: Tag === 'button' ? type : undefined,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => {
      setHovered(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    "aria-disabled": disabled || undefined,
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      height: H[size],
      padding: variant === 'ghost' ? '0 4px' : PAD[size],
      fontFamily: 'var(--font-text)',
      fontSize: FS[size],
      fontWeight: 'var(--weight-strong)',
      lineHeight: 1,
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      transition: 'background var(--transition-hover), color var(--transition-hover), border-color var(--transition-hover), opacity var(--transition-hover)',
      ...s,
      ...style
    }
  }, rest), icon && iconPosition === 'left' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 16 : 18
  }) : null, /*#__PURE__*/React.createElement("span", null, children), icon && iconPosition === 'right' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 16 : 18
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BOX = {
  sm: 34,
  md: 44,
  lg: 52
};
function IconButton({
  icon,
  label,
  variant = 'quiet',
  size = 'md',
  ground = 'paper',
  disabled,
  onClick,
  style,
  className,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const dark = ground === 'dark';
  const solid = variant === 'solid';
  return /*#__PURE__*/React.createElement("button", _extends({
    className: className,
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: BOX[size],
      height: BOX[size],
      padding: 0,
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      border: variant === 'outline' ? '2px solid var(--turquoise)' : '2px solid transparent',
      background: solid ? dark ? 'var(--paper)' : 'var(--deep-teal)' : hovered ? dark ? 'rgba(250,246,241,.10)' : 'rgba(22,167,155,.10)' : 'transparent',
      color: solid ? dark ? 'var(--deep-teal)' : 'var(--paper)' : dark ? 'var(--paper)' : 'var(--deep-teal)',
      transition: 'background var(--transition-hover), color var(--transition-hover)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 18 : 20
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/RhythmRule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// The brand's non-photographic imagery system: a measured horizontal rule with
// marks at intervals, derived from notation without ever being notation.
function RhythmRule({
  marks = 7,
  color = 'hairline',
  height = 28,
  pattern = 'even',
  style,
  className,
  ...rest
}) {
  const stroke = color === 'turquoise' ? 'var(--turquoise)' : color === 'dark' ? 'var(--hairline-dark)' : 'var(--hairline)';
  const heights = {
    even: () => 1,
    alternating: i => i % 2 ? 0.55 : 1,
    phrase: i => [1, 0.5, 0.7, 0.5, 1, 0.5, 0.7, 0.5][i % 8]
  };
  const h = heights[pattern] || heights.even;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    role: "presentation",
    style: {
      display: 'flex',
      alignItems: 'center',
      height,
      width: '100%',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: 1,
      background: stroke
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, Array.from({
    length: marks
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 1,
      height: Math.round(height * 0.5 * h(i)),
      background: stroke
    }
  })))));
}
Object.assign(__ds_scope, { RhythmRule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/RhythmRule.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  selected,
  onSelect,
  onRemove,
  disabled,
  ground = 'paper',
  style,
  className,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const dark = ground === 'dark';
  const interactive = !!(onSelect || onRemove);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    role: onSelect ? 'button' : undefined,
    tabIndex: onSelect && !disabled ? 0 : undefined,
    onClick: disabled ? undefined : onSelect,
    onKeyDown: onSelect ? e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onSelect(e);
      }
    } : undefined,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: 30,
      padding: '0 12px',
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--size-small)',
      fontWeight: 'var(--weight-strong)',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : interactive ? 'pointer' : 'default',
      opacity: disabled ? 0.4 : 1,
      background: selected ? 'var(--turquoise)' : hovered && interactive ? dark ? 'rgba(250,246,241,.08)' : 'rgba(22,167,155,.08)' : 'transparent',
      color: selected ? 'var(--paper)' : dark ? 'var(--chalk)' : 'var(--graphite)',
      border: `var(--border-hair) solid ${selected ? 'var(--turquoise)' : dark ? 'var(--dark-border-hairline)' : 'var(--hairline)'}`,
      transition: 'background var(--transition-hover), color var(--transition-hover), border-color var(--transition-hover)',
      ...style
    }
  }, rest), children, onRemove ? /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      if (!disabled) onRemove(e);
    },
    style: {
      display: 'inline-flex',
      cursor: 'pointer',
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
// Source of truth: uploads/maistros-wordmark-*.html. The `i` is an SVG glyph —
// stem + cubic-curve sparkle in a 20x52 box, 0.823em tall, sitting on the baseline.
const SPARKLE = 'M10 0.5 C10.9 5.6 12.4 7.1 17.5 8 C12.4 8.9 10.9 10.4 10 15.5 C9.1 10.4 7.6 8.9 2.5 8 C7.6 7.1 9.1 5.6 10 0.5 Z';
const FIELDS = {
  paper: {
    text: '#0A403B',
    stem: '#0A403B',
    spark: '#F2621F'
  },
  dark: {
    text: '#FFFFFF',
    stem: '#FFFFFF',
    spark: '#F2621F'
  },
  turquoise: {
    text: '#0A403B',
    stem: '#0A403B',
    spark: '#FAF6F1'
  }
};
function Wordmark({
  size = 28,
  ground = 'paper',
  descriptor,
  animate = true,
  style,
  className
}) {
  const c = FIELDS[ground] || FIELDS.paper;
  const h = size * 0.823;
  const w = h * (20 / 52);
  const stacked = !!descriptor;
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: stacked ? 'center' : 'flex-start',
      gap: size * 0.3,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-label": "maistros",
    role: "img",
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: size,
      lineHeight: 1,
      letterSpacing: '-0.02em',
      color: c.text,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", null, "ma"), /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: h,
    viewBox: "0 0 20 52",
    "aria-hidden": "true",
    style: {
      display: 'block',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "5.5",
    y: "19",
    width: "9",
    height: "33",
    rx: "2",
    fill: c.stem
  }), /*#__PURE__*/React.createElement("path", {
    d: SPARKLE,
    fill: c.spark,
    className: animate ? 'm-sparkle' : undefined,
    style: {
      transformOrigin: '10px 8px',
      transformBox: 'view-box'
    }
  })), /*#__PURE__*/React.createElement("span", null, "stros")), descriptor ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: Math.max(12, size * 0.34),
      lineHeight: 1.4,
      color: ground === 'dark' ? 'var(--muted-chalk)' : ground === 'turquoise' ? 'var(--deep-teal)' : 'var(--slate)',
      textAlign: 'center'
    }
  }, descriptor) : null);
}
function LogoIcon({
  size = 40,
  ground = 'paper',
  style,
  className
}) {
  const bg = {
    paper: '#FAF6F1',
    dark: '#0A403B',
    turquoise: '#16A79B'
  }[ground] || '#FAF6F1';
  const c = FIELDS[ground] || FIELDS.paper;
  return /*#__PURE__*/React.createElement("svg", {
    className: className,
    width: size,
    height: size,
    viewBox: "0 0 96 96",
    role: "img",
    "aria-label": "maistros",
    style: {
      display: 'block',
      ...style
    }
  }, /*#__PURE__*/React.createElement("rect", {
    width: "96",
    height: "96",
    rx: "21",
    fill: bg
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(38 20)"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "5.5",
    y: "19",
    width: "9",
    height: "33",
    rx: "2",
    fill: c.stem
  }), /*#__PURE__*/React.createElement("path", {
    d: SPARKLE,
    fill: c.spark
  })));
}
Object.assign(__ds_scope, { Wordmark, LogoIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/feedback/CountIn.jsx
try { (() => {
// The brand's loading state: three marks appearing in sequence — a count-in —
// instead of a spinner.
function CountIn({
  label,
  size = 8,
  color = 'var(--turquoise)',
  style,
  className
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    role: "status",
    "aria-live": "polite",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: size * 0.75
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 2,
      height: size * 2,
      background: color,
      borderRadius: 1,
      animation: `maistros-countin 900ms var(--ease-beat) ${i * 180}ms infinite`
    }
  }))), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-small)',
      color: 'var(--text-caption)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { CountIn });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/CountIn.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  width = 520,
  style,
  className
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-5)',
      background: 'rgba(10,64,59,.42)',
      backdropFilter: 'blur(3px)',
      animation: 'maistros-fade var(--dur-base) var(--ease-beat) both'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === 'string' ? title : undefined,
    className: className,
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: '#FFFFFF',
      border: 'var(--border-hair) solid var(--hairline)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-overlay)',
      padding: 'var(--space-6)',
      animation: 'maistros-rise var(--dur-base) var(--ease-beat) both',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)',
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      color: 'var(--deep-teal)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 24,
      lineHeight: 1.2
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-2) 0 0',
      color: 'var(--slate)',
      fontSize: 'var(--size-small)'
    }
  }, description) : null), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Sluiten",
    size: "sm"
  }) : null), /*#__PURE__*/React.createElement("div", null, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-6)'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const ICONS = {
  info: 'info',
  success: 'check',
  warning: 'triangle-alert'
};
function Toast({
  message,
  detail,
  tone = 'info',
  onDismiss,
  action,
  style,
  className
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    className: className,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      minWidth: 300,
      maxWidth: 420,
      padding: 'var(--space-4)',
      background: 'var(--deep-teal)',
      color: 'var(--chalk)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-overlay)',
      animation: 'maistros-rise var(--dur-base) var(--ease-beat) both',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ICONS[tone] || 'info',
    size: 20,
    color: tone === 'warning' ? 'var(--orange)' : 'var(--turquoise)',
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#FFFFFF',
      fontWeight: 'var(--weight-strong)',
      fontSize: 'var(--size-small)',
      lineHeight: 1.4
    }
  }, message), detail ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      fontSize: 'var(--size-small)',
      color: 'var(--muted-chalk)'
    }
  }, detail) : null, action ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)'
    }
  }, action) : null), onDismiss ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Sluiten",
    size: "sm",
    ground: "dark",
    onClick: onDismiss
  }) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children,
  placement = 'top',
  style,
  className
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%,-8px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%,8px)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(-8px,-50%)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(8px,-50%)'
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, children, open ? /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      zIndex: 70,
      whiteSpace: 'nowrap',
      padding: '6px 10px',
      background: 'var(--deep-teal)',
      color: 'var(--chalk)',
      fontFamily: 'var(--font-text)',
      fontSize: 13,
      lineHeight: 1.4,
      borderRadius: 'var(--radius-xs)',
      pointerEvents: 'none',
      animation: 'maistros-fade var(--dur-hover) var(--ease-beat) both'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked,
  onChange,
  label,
  description,
  disabled,
  indeterminate,
  ground = 'paper',
  id,
  name,
  style,
  className
}) {
  const dark = ground === 'dark';
  const on = checked || indeterminate;
  return /*#__PURE__*/React.createElement("label", {
    className: className,
    htmlFor: id,
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: id,
    name: name,
    type: "checkbox",
    checked: !!checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 22,
      height: 22,
      flex: '0 0 auto',
      marginTop: 1,
      borderRadius: 'var(--radius-xs)',
      background: on ? 'var(--turquoise)' : dark ? 'rgba(250,246,241,.05)' : '#FFFFFF',
      border: `var(--border-thick) solid ${on ? 'var(--turquoise)' : dark ? 'var(--dark-border-hairline)' : 'var(--hairline)'}`,
      color: 'var(--paper)',
      transition: 'background var(--transition-hover), border-color var(--transition-hover)'
    }
  }, indeterminate ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: 16
  }) : checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16
  }) : null), label || description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--size-body)',
      color: dark ? 'var(--chalk)' : 'var(--graphite)',
      lineHeight: 1.4
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-small)',
      color: dark ? 'var(--muted-chalk)' : 'var(--slate)'
    }
  }, description) : null) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function Field({
  label,
  htmlFor,
  hint,
  error,
  required,
  ground = 'paper',
  children,
  style,
  className
}) {
  const dark = ground === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--size-small)',
      fontWeight: 'var(--weight-strong)',
      color: dark ? 'var(--chalk)' : 'var(--deep-teal)'
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--slate)',
      fontWeight: 400
    }
  }, " (verplicht)") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-small)',
      color: dark ? '#F2621F' : 'var(--orange)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-small)',
      color: dark ? 'var(--muted-chalk)' : 'var(--slate)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  value,
  onChange,
  placeholder,
  type = 'text',
  size = 'md',
  icon,
  invalid,
  disabled,
  multiline,
  rows = 4,
  ground = 'paper',
  id,
  name,
  style,
  className,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const dark = ground === 'dark';
  const border = invalid ? 'var(--orange)' : focused ? 'var(--turquoise)' : dark ? 'var(--dark-border-hairline)' : 'var(--hairline)';
  const shell = {
    display: 'flex',
    alignItems: multiline ? 'flex-start' : 'center',
    gap: 'var(--space-2)',
    height: multiline ? 'auto' : size === 'sm' ? 'var(--control-h-sm)' : 'var(--control-h-md)',
    padding: multiline ? '12px 14px' : '0 14px',
    background: dark ? 'rgba(250,246,241,.05)' : '#FFFFFF',
    border: `var(--border-hair) solid ${border}`,
    borderRadius: multiline ? 'var(--radius-md)' : 'var(--radius-sm)',
    boxShadow: focused ? 'var(--ring-focus)' : 'var(--shadow-inset-field)',
    opacity: disabled ? 0.5 : 1,
    transition: 'border-color var(--transition-hover), box-shadow var(--transition-hover)',
    ...style
  };
  const inner = {
    flex: 1,
    minWidth: 0,
    border: 0,
    outline: 'none',
    background: 'transparent',
    fontFamily: 'var(--font-text)',
    fontSize: size === 'sm' ? 15 : 'var(--size-body)',
    color: dark ? 'var(--chalk)' : 'var(--graphite)',
    lineHeight: multiline ? 'var(--leading-body)' : 1.2,
    resize: multiline ? 'vertical' : undefined
  };
  const Tag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: shell
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: dark ? 'var(--muted-chalk)' : 'var(--slate)',
    style: {
      marginTop: multiline ? 3 : 0
    }
  }) : null, /*#__PURE__*/React.createElement(Tag, _extends({
    id: id,
    name: name,
    type: multiline ? undefined : type,
    rows: multiline ? rows : undefined,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    "aria-invalid": invalid || undefined,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: inner
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  options = [],
  value,
  onChange,
  name,
  orientation = 'vertical',
  ground = 'paper',
  style,
  className
}) {
  const dark = ground === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: orientation === 'horizontal' ? 'row' : 'column',
      gap: orientation === 'horizontal' ? 'var(--space-5)' : 'var(--space-3)',
      flexWrap: 'wrap',
      ...style
    }
  }, options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    const on = value === opt.value;
    return /*#__PURE__*/React.createElement("label", {
      key: opt.value,
      style: {
        display: 'inline-flex',
        alignItems: 'flex-start',
        gap: 'var(--space-3)',
        cursor: opt.disabled ? 'not-allowed' : 'pointer',
        opacity: opt.disabled ? 0.5 : 1
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      value: opt.value,
      checked: on,
      disabled: opt.disabled,
      onChange: () => onChange && onChange(opt.value),
      style: {
        position: 'absolute',
        opacity: 0,
        width: 0,
        height: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 22,
        height: 22,
        flex: '0 0 auto',
        marginTop: 1,
        borderRadius: 'var(--radius-pill)',
        background: dark ? 'rgba(250,246,241,.05)' : '#FFFFFF',
        border: `var(--border-thick) solid ${on ? 'var(--turquoise)' : dark ? 'var(--dark-border-hairline)' : 'var(--hairline)'}`,
        transition: 'border-color var(--transition-hover)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: 'var(--radius-pill)',
        background: on ? 'var(--turquoise)' : 'transparent',
        transition: 'background var(--transition-hover)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-text)',
        fontSize: 'var(--size-body)',
        color: dark ? 'var(--chalk)' : 'var(--graphite)',
        lineHeight: 1.4
      }
    }, opt.label), opt.description ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--size-small)',
        color: dark ? 'var(--muted-chalk)' : 'var(--slate)'
      }
    }, opt.description) : null));
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  value,
  onChange,
  options = [],
  placeholder,
  size = 'md',
  invalid,
  disabled,
  ground = 'paper',
  id,
  name,
  style,
  className,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const dark = ground === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      height: size === 'sm' ? 'var(--control-h-sm)' : 'var(--control-h-md)',
      padding: '0 12px 0 14px',
      background: dark ? 'rgba(250,246,241,.05)' : '#FFFFFF',
      border: `var(--border-hair) solid ${invalid ? 'var(--orange)' : focused ? 'var(--turquoise)' : dark ? 'var(--dark-border-hairline)' : 'var(--hairline)'}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focused ? 'var(--ring-focus)' : 'var(--shadow-inset-field)',
      opacity: disabled ? 0.5 : 1,
      transition: 'border-color var(--transition-hover), box-shadow var(--transition-hover)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    name: name,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      minWidth: 0,
      appearance: 'none',
      border: 0,
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-text)',
      fontSize: size === 'sm' ? 15 : 'var(--size-body)',
      color: value ? dark ? 'var(--chalk)' : 'var(--graphite)' : dark ? 'var(--muted-chalk)' : 'var(--slate)',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    color: dark ? 'var(--muted-chalk)' : 'var(--slate)'
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label,
  description,
  disabled,
  size = 'md',
  ground = 'paper',
  id,
  name,
  style,
  className
}) {
  const dark = ground === 'dark';
  const w = size === 'sm' ? 38 : 46;
  const h = size === 'sm' ? 22 : 26;
  const knob = h - 8;
  return /*#__PURE__*/React.createElement("label", {
    className: className,
    htmlFor: id,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: id,
    name: name,
    type: "checkbox",
    role: "switch",
    checked: !!checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'relative',
      display: 'inline-block',
      width: w,
      height: h,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--turquoise)' : dark ? 'rgba(250,246,241,.14)' : 'var(--hairline)',
      transition: 'background var(--transition-base)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 4,
      left: checked ? w - knob - 4 : 4,
      width: knob,
      height: knob,
      borderRadius: 'var(--radius-pill)',
      background: dark && !checked ? 'var(--chalk)' : '#FFFFFF',
      transition: 'left var(--transition-base)'
    }
  })), label || description ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-text)',
      fontSize: 'var(--size-body)',
      color: dark ? 'var(--chalk)' : 'var(--graphite)',
      lineHeight: 1.4
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-small)',
      color: dark ? 'var(--muted-chalk)' : 'var(--slate)'
    }
  }, description) : null) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  ground = 'paper',
  style,
  className
}) {
  const dark = ground === 'dark';
  const active = value ?? (items[0] && (items[0].value || items[0]));
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    role: "tablist",
    style: {
      display: 'flex',
      gap: variant === 'pill' ? 'var(--space-1)' : 'var(--space-5)',
      padding: variant === 'pill' ? 4 : 0,
      background: variant === 'pill' ? dark ? 'rgba(250,246,241,.06)' : 'var(--paper-sunk)' : 'transparent',
      borderRadius: variant === 'pill' ? 'var(--radius-pill)' : 0,
      borderBottom: variant === 'underline' ? `var(--border-hair) solid ${dark ? 'var(--dark-border-hairline)' : 'var(--hairline)'}` : 'none',
      ...style
    }
  }, items.map(it => {
    const item = typeof it === 'string' ? {
      value: it,
      label: it
    } : it;
    const on = item.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: item.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(item.value),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        border: 0,
        cursor: 'pointer',
        fontFamily: 'var(--font-text)',
        fontSize: 'var(--size-body)',
        fontWeight: on ? 'var(--weight-strong)' : 400,
        padding: variant === 'pill' ? '8px 16px' : '0 0 12px',
        borderRadius: variant === 'pill' ? 'var(--radius-pill)' : 0,
        background: variant === 'pill' ? on ? dark ? 'var(--paper)' : '#FFFFFF' : 'transparent' : 'transparent',
        color: on ? variant === 'pill' ? 'var(--deep-teal)' : dark ? '#FFFFFF' : 'var(--deep-teal)' : dark ? 'var(--muted-chalk)' : 'var(--slate)',
        boxShadow: variant === 'underline' && on ? 'inset 0 -2px 0 var(--turquoise)' : 'none',
        transition: 'color var(--transition-hover), background var(--transition-hover), box-shadow var(--transition-hover)'
      }
    }, item.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: item.icon,
      size: 18
    }) : null, item.label, item.count != null ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--size-small)',
        color: dark ? 'var(--muted-chalk)' : 'var(--slate)'
      }
    }, item.count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AdviesScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Icon,
  RhythmRule,
  Badge
} = window.MaistrosDesignSystem_d1f3c1;
const OFFERS = [{
  t: 'AI-scan',
  b: 'Een halve dag aan tafel, een concreet overzicht van kansen, gerangschikt op impact en haalbaarheid.',
  icon: 'search'
}, {
  t: 'Roadmap',
  b: 'Wat eerst, wat later, wat nooit. Met kosten en verwachte opbrengst.',
  icon: 'map'
}, {
  t: 'Sparringpartner',
  b: 'Een vast moment per maand voor directies die AI serieus nemen maar geen CTO hebben.',
  icon: 'messages-square'
}];
function AdviesScreen({
  onContact
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-9) 0 var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.2rem,4vw,3.6rem)'
    }
  }, "Eerst weten. Dan doen."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-5)',
      fontSize: 19,
      lineHeight: 1.6
    }
  }, "Voor je investeert in AI, wil je weten waar het geld zit. Wij kijken naar je bedrijf zoals een bouwer dat doet: welke processen zijn repetitief, waar zit de data, wat is realistisch met de tools die je al hebt.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 0 var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement(RhythmRule, {
    marks: 11,
    pattern: "alternating"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gutter)',
      marginTop: 'var(--space-7)'
    }
  }, OFFERS.map((o, i) => /*#__PURE__*/React.createElement(Card, {
    key: o.t,
    className: "m-rise",
    style: {
      animationDelay: i * 60 + 'ms'
    },
    title: o.t
  }, /*#__PURE__*/React.createElement(Icon, {
    name: o.icon,
    size: 24,
    color: "var(--deep-teal)",
    style: {
      marginBottom: 'var(--space-3)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-small)',
      lineHeight: 1.6,
      marginBottom: 0
    }
  }, o.b)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-7)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: "arrow-right",
    onClick: onContact
  }, "Plan een kennismaking"), /*#__PURE__*/React.createElement("span", {
    className: "caption",
    style: {
      margin: 0
    }
  }, "Prijsindicatie op aanvraag. Als het niet rekent, doen we het niet.")))));
}
Object.assign(window, {
  AdviesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AdviesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AgentsScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Icon,
  RhythmRule,
  Checkbox,
  Radio,
  Badge
} = window.MaistrosDesignSystem_d1f3c1;
const STEPS = [{
  n: '1',
  t: 'AI-champions',
  b: 'Elke afdeling wijst één persoon aan. Niet per se de meest technische, wel de meest nieuwsgierige. Dit worden jouw AI-champions.'
}, {
  n: '2',
  t: 'Workshop',
  b: 'Eén dag. We leren de champions wat AI kan, wat het niet kan, en hoe je een goed use case herkent. Aan het eind van de dag heeft elke afdeling een shortlist.'
}, {
  n: '3',
  t: 'Observatie & businesscase',
  b: 'We lopen mee in het proces. We rekenen uit wat de agent bespaart, wat het kost om te bouwen en wanneer het terugverdiend is. Eerlijk: soms is het antwoord "niet doen".'
}, {
  n: '4',
  t: 'Bouwen',
  b: 'De agents die het waard zijn, bouwen we. Samen met de champion, zodat de kennis in jouw bedrijf blijft.'
}, {
  n: '5',
  t: 'Volgende ronde',
  b: 'De champions hebben nu een werkende agent gezien. Ze zien de volgende kansen zelf. Zo groeit AI in je bedrijf zonder dat je ons elke keer nodig hebt.'
}];
const FIT = ['processen grotendeels in Microsoft draaien;', 'de directie zelf achter AI staat (dit werkt niet als project van IT alleen);', 'er ruimte is om mensen een paar dagen vrij te maken om mee te bouwen.'];
function AgentsScreen({
  onContact
}) {
  const [step, setStep] = React.useState('3');
  const [checks, setChecks] = React.useState([true, true, false]);
  const score = checks.filter(Boolean).length;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-9) 0 var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.2rem,4vw,3.6rem)'
    }
  }, "Jullie kennen het werk. Wij kennen de AI. Samen bouwen we de agent."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-5)',
      fontSize: 19,
      lineHeight: 1.6,
      maxWidth: 640
    }
  }, "De beste AI-toepassingen worden niet bedacht in een vergaderzaal. Ze komen van de mensen die elke dag tegen hetzelfde probleem aanlopen. Ons traject haalt die kennis naar boven en bouwt er iets van dat werkt."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: "arrow-right",
    onClick: onContact
  }, "Plan een kennismaking"))))), /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement(RhythmRule, {
    color: "turquoise",
    marks: 5
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-8) 0'
    }
  }, /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Het traject",
    lead: "Vijf stappen. Klik een stap om te zien wat er gebeurt."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '260px 1fr',
      gap: 'var(--space-7)',
      marginTop: 'var(--space-6)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, STEPS.map(s => {
    const on = s.n === step;
    return /*#__PURE__*/React.createElement("button", {
      key: s.n,
      onClick: () => setStep(s.n),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        textAlign: 'left',
        padding: '14px 12px',
        background: on ? '#FFFFFF' : 'transparent',
        border: 0,
        borderLeft: '2px solid ' + (on ? 'var(--turquoise)' : 'var(--hairline)'),
        cursor: 'pointer',
        fontFamily: 'var(--font-text)',
        transition: 'background var(--transition-hover)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 18,
        color: on ? 'var(--deep-teal)' : 'var(--slate)',
        width: 18
      }
    }, s.n), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--size-body)',
        fontWeight: on ? 600 : 400,
        color: on ? 'var(--deep-teal)' : 'var(--slate)'
      }
    }, s.t));
  })), /*#__PURE__*/React.createElement(Card, {
    variant: "field",
    padding: "var(--space-7)",
    key: step,
    className: "m-rise"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-small)',
      fontWeight: 600,
      color: 'var(--turquoise)'
    }
  }, "Stap ", step), /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#FFFFFF',
      fontSize: 28,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      marginTop: 'var(--space-2)'
    }
  }, STEPS.find(s => s.n === step).t), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--chalk)',
      marginTop: 'var(--space-4)',
      marginBottom: 0,
      fontSize: 18,
      lineHeight: 1.6
    }
  }, STEPS.find(s => s.n === step).b))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-8) 0 var(--space-9)',
      background: 'var(--paper-sunk)',
      borderTop: 'var(--border-hair) solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Voor wie"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, "Dit werkt voor bedrijven van 50 tot 250 medewerkers waar:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, FIT.map((t, i) => /*#__PURE__*/React.createElement(Checkbox, {
    key: i,
    id: 'fit' + i,
    checked: checks[i],
    onChange: () => setChecks(checks.map((c, j) => j === i ? !c : c)),
    label: t
  })))), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 56,
      lineHeight: 1,
      color: 'var(--deep-teal)'
    }
  }, score, "/3"), /*#__PURE__*/React.createElement(Badge, {
    tone: score === 3 ? 'structure' : 'neutral'
  }, score === 3 ? 'Goede match' : 'Laten we praten')), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--size-small)',
      lineHeight: 1.6
    }
  }, score === 3 ? 'Alle drie de voorwaarden staan aan. Een uur aan tafel is de logische volgende stap.' : 'Niet alles hoeft op dag één te kloppen. Vertel wat er nog niet staat, dan zeggen we eerlijk of het traject nu past.'), /*#__PURE__*/React.createElement(Button, {
    icon: "arrow-right",
    onClick: onContact
  }, "Plan een kennismaking"))))));
}
Object.assign(window, {
  AgentsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AgentsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Icon,
  RhythmRule,
  Tag
} = window.MaistrosDesignSystem_d1f3c1;
const DOORS = [{
  n: '1',
  kicker: 'Weten',
  title: 'Strategie & advies',
  body: 'Wat kan AI nu écht voor jouw bedrijf betekenen, en wat is onzin? Geen slidedeck van 80 pagina\'s. Wel een helder antwoord: hier zit de winst, dit kost het, dit is de volgorde.',
  route: 'advies',
  icon: 'compass'
}, {
  n: '2',
  kicker: 'Beginnen',
  title: 'Power AI',
  body: 'Jouw eerste werkende AI-toepassing binnen een paar weken. Power AI maakt automatisch rapporten uit de data die al in je Microsoft-omgeving zit. Geen nieuw systeem, geen migratie.',
  route: 'power',
  icon: 'file-text'
}, {
  n: '3',
  kicker: 'Bouwen',
  title: 'AI-agents op maat',
  body: 'Jouw mensen weten waar het werk vastloopt. Wij leren ze hoe ze daar een AI-agent van maken — en bouwen die vervolgens samen, met een businesscase die vooraf klopt.',
  route: 'agents',
  icon: 'wrench'
}];
const PROOF = [{
  icon: 'layers',
  title: 'Microsoft is onze thuisbasis.',
  body: 'We bouwen op wat je al hebt: Microsoft 365, Dynamics, Power BI.'
}, {
  icon: 'calculator',
  title: 'ROI voor we beginnen.',
  body: 'Als het niet rekent, doen we het niet. Dat zeggen we ook.'
}, {
  icon: 'users',
  title: 'Jouw mensen aan het stuur.',
  body: 'Wij maken ze zelfstandig, niet afhankelijk van ons.'
}];
function HomeScreen({
  onNavigate,
  onContact
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-10) 0 var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "m-rise"
  }, "AI die werkt.", /*#__PURE__*/React.createElement("br", null), "Ook bij jullie."), /*#__PURE__*/React.createElement("p", {
    className: "m-rise",
    style: {
      animationDelay: '60ms',
      marginTop: 'var(--space-5)',
      fontSize: 20,
      lineHeight: 1.55,
      maxWidth: 640
    }
  }, "Iedereen praat over AI. Wij zorgen dat het in jouw bedrijf ook daadwerkelijk iets d\xF3et \u2014 met de data en de mensen die je al hebt."), /*#__PURE__*/React.createElement("div", {
    className: "m-rise",
    style: {
      animationDelay: '120ms',
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: "arrow-right",
    onClick: onContact
  }, "Plan een kennismaking"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => onNavigate('agents')
  }, "Bekijk hoe we werken")), /*#__PURE__*/React.createElement("p", {
    className: "caption",
    style: {
      marginTop: 'var(--space-4)',
      marginBottom: 0
    }
  }, "Voor mkb-bedrijven van 50 tot 250 medewerkers die werken in Microsoft 365, Dynamics of Power BI.")))), /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement(RhythmRule, {
    marks: 17,
    pattern: "phrase"
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-9) 0'
    }
  }, /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Je hebt Copilot. En nu?"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, "Grote kans dat je al AI-licenties hebt. En dat er in je bedrijf drie mensen zijn die er echt iets mee doen. De rest wacht af. Niet omdat ze niet willen, maar omdat niemand ze heeft laten zien wat het voor h\xFAn werk betekent."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 600,
      color: 'var(--deep-teal)',
      marginBottom: 0
    }
  }, "AI mislukt zelden op de techniek. Het mislukt op adoptie. Daar zijn wij voor.")), /*#__PURE__*/React.createElement(Card, {
    variant: "field",
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, [['3', 'mensen in je bedrijf doen er iets mee'], ['50–250', 'medewerkers — onze doelgroep'], ['1 werkdag', 'reactietijd, met een mens aan de lijn']].map(([big, small]) => /*#__PURE__*/React.createElement("div", {
    key: small
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 40,
      lineHeight: 1,
      color: '#FFFFFF'
    }
  }, big), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-small)',
      color: 'var(--muted-chalk)',
      marginTop: 6
    }
  }, small)))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-8) 0',
      background: 'var(--paper-sunk)',
      borderTop: 'var(--border-hair) solid var(--hairline)',
      borderBottom: 'var(--border-hair) solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Drie manieren om te beginnen",
    lead: "Kies de deur die past bij waar je nu staat. Ze sluiten elkaar niet uit."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gutter)',
      marginTop: 'var(--space-6)'
    }
  }, DOORS.map((d, i) => /*#__PURE__*/React.createElement(Card, {
    key: d.n,
    className: "m-rise",
    style: {
      animationDelay: i * 60 + 'ms',
      display: 'flex',
      flexDirection: 'column'
    },
    interactive: true,
    href: '#' + d.route,
    onClick: e => {
      e.preventDefault();
      onNavigate(d.route);
    },
    eyebrow: d.n + ' — ' + d.kicker,
    title: d.title
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-small)',
      lineHeight: 1.6,
      color: 'var(--graphite)'
    }
  }, d.body), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--deep-teal)',
      fontSize: 'var(--size-small)',
      fontWeight: 600
    }
  }, "Lees meer ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  }))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-9) 0'
    }
  }, /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Waarom maistros",
    title: "Geen consultants die praten. Bouwers die meedoen.",
    lead: "We zijn met z'n twee\xEBn. Een data-engineer en een AI-engineer. De persoon die je spreekt aan tafel is ook de persoon die het bouwt. Geen accountmanager ertussen, geen junior die het uitvoert."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gutter)',
      marginTop: 'var(--space-6)'
    }
  }, PROOF.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.title,
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 22,
    color: "var(--deep-teal)",
    style: {
      marginTop: 3
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: 'var(--deep-teal)',
      fontSize: 'var(--size-body)'
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-small)',
      color: 'var(--slate)',
      lineHeight: 1.6,
      marginTop: 4
    }
  }, p.body))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--deep-teal)',
      padding: 'var(--space-9) 0'
    }
  }, /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 'var(--space-8)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#FFFFFF'
    }
  }, "Benieuwd wat AI in jouw bedrijf kan doen?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--chalk)',
      marginTop: 'var(--space-4)',
      marginBottom: 0
    }
  }, "Een uur aan tafel. Jij vertelt hoe het werk loopt, wij vertellen eerlijk waar AI wel en niet helpt. Geen verplichtingen, geen verkooppraatje.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    ground: "dark",
    icon: "arrow-right",
    onClick: onContact
  }, "Plan een kennismaking"))))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/OverScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Icon,
  Field,
  Input,
  Select,
  Checkbox,
  Toast,
  RhythmRule
} = window.MaistrosDesignSystem_d1f3c1;
function OverScreen({
  onSent
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-9) 0 var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr .9fr',
      gap: 'var(--space-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.2rem,4vw,3.4rem)'
    }
  }, "Twee bouwers. Nul tussenlagen."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-5)',
      fontSize: 19,
      lineHeight: 1.6
    }
  }, "maistros is [Naam] en [Naam]. De een leeft in data \u2014 Power BI, Dynamics, datamodellen. De ander bouwt AI-systemen \u2014 agents, integraties, de dingen die het werk echt doen. Samen dekken we precies het stuk waar de meeste AI-projecten stranden: de brug tussen wat er in je systemen zit en wat je ermee wilt."), /*#__PURE__*/React.createElement("p", null, "We hebben maistros opgericht omdat we het te vaak zagen: mooie plannen, dure licenties, en na een half jaar doet niemand er iets mee. Dat kan beter. Niet met grotere teams, maar met mensen die zelf bouwen \xE9n eerlijk zeggen wanneer iets niet gaat werken."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--slate)'
    }
  }, "Gevestigd in Nederland. Werkend voor het Nederlandse mkb."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-5)'
    }
  }, [['Data-engineer', 'Power BI · Dynamics · datamodellen'], ['AI-engineer', 'Agents · integraties · systemen']].map(([t, b]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    variant: "sunk",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--deep-teal)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user",
    size: 22,
    color: "var(--paper)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: 'var(--deep-teal)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--slate)',
      marginTop: 4
    }
  }, b), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--slate)',
      marginTop: 'var(--space-3)'
    }
  }, "Portretfoto's ontbreken in de bronbestanden \u2014 plaats hier de echte foto."))))), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-6)",
    style: {
      position: 'sticky',
      top: 100
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: 'var(--deep-teal)'
    }
  }, "Contact"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-small)',
      color: 'var(--slate)',
      marginTop: 'var(--space-2)'
    }
  }, "Vertel kort wat er speelt. We reageren binnen \xE9\xE9n werkdag, en je krijgt een mens aan de lijn."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Naam",
    htmlFor: "o-n"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "o-n",
    placeholder: "Voor- en achternaam"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Werkmail",
    htmlFor: "o-m"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "o-m",
    type: "email",
    icon: "mail",
    placeholder: "jij@bedrijf.nl"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Aantal medewerkers",
    htmlFor: "o-s"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "o-s",
    placeholder: "Kies een bereik",
    options: ['50–100', '100–175', '175–250', 'Meer dan 250']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Wat speelt er?",
    htmlFor: "o-t"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "o-t",
    multiline: true,
    rows: 3,
    placeholder: "Vertel kort wat er speelt."
  })), /*#__PURE__*/React.createElement(Checkbox, {
    id: "o-c",
    label: "Stuur me vooraf de agenda",
    description: "E\xE9n A4, geen slidedeck."
  }), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    icon: "arrow-right",
    onClick: () => {
      setSent(true);
      onSent && onSent();
    }
  }, "Versturen")), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    message: "Bericht verstuurd",
    detail: "We reageren binnen \xE9\xE9n werkdag.",
    onDismiss: () => setSent(false)
  })) : null)))));
}
Object.assign(window, {
  OverScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/OverScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PowerAIScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Icon,
  Tabs,
  Tag,
  RhythmRule,
  Switch,
  Select,
  CountIn,
  Tooltip
} = window.MaistrosDesignSystem_d1f3c1;
const EXAMPLES = {
  sales: {
    title: 'Salesrapport',
    body: 'Pipeline, afwijkingen, opvolgacties. Elke week, zonder dat iemand een dashboard hoeft te openen.',
    sources: ['Dynamics 365', 'Power BI'],
    schedule: 'Elke maandag 08:00'
  },
  meeting: {
    title: 'Meetingvoorbereiding',
    body: 'Wie zit er aan tafel, wat is de historie, wat staat er open. Automatisch voor elke afspraak.',
    sources: ['Outlook', 'SharePoint', 'Teams'],
    schedule: 'Een uur van tevoren'
  },
  directie: {
    title: 'Directierapportage',
    body: 'De cijfers die jij elke maand wilt zien, in de vorm die jij leest.',
    sources: ['Power BI', 'Dynamics 365'],
    schedule: 'Eerste werkdag van de maand'
  },
  signaal: {
    title: 'Signalering',
    body: 'Een klant die stil valt, een project dat over budget gaat. Je hoort het vóór het een probleem is.',
    sources: ['Dynamics 365', 'Outlook'],
    schedule: 'Op trigger'
  }
};
function PowerAIScreen({
  onContact
}) {
  const [tab, setTab] = React.useState('sales');
  const [live, setLive] = React.useState(true);
  const ex = EXAMPLES[tab];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-9) 0 var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr .95fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "structure"
  }, "Power AI"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(2.2rem,4vw,3.4rem)',
      marginTop: 'var(--space-4)'
    }
  }, "Rapporten die zichzelf schrijven. Uit data die je al hebt."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-5)',
      fontSize: 19,
      lineHeight: 1.6
    }
  }, "Power AI koppelt met je Microsoft-omgeving \u2014 Power BI, Dynamics, Outlook, SharePoint \u2014 en laat een AI-agent precies het rapport maken dat je nodig hebt. Wanneer je het nodig hebt."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: "arrow-right",
    onClick: onContact
  }, "Vraag een demo aan"))), /*#__PURE__*/React.createElement(Card, {
    padding: "0",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: '12px 16px',
      borderBottom: 'var(--border-hair) solid var(--hairline)',
      background: 'var(--paper-sunk)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-text",
    size: 18,
    color: "var(--deep-teal)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--deep-teal)'
    }
  }, ex.title), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: ex.schedule
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    size: "sm"
  }, ex.schedule)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 'var(--space-4)'
    }
  }, ex.sources.map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s,
    selected: true
  }, s)), /*#__PURE__*/React.createElement(Tag, {
    onSelect: () => {}
  }, "+ bron")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--graphite)'
    }
  }, ex.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-5)',
      paddingTop: 'var(--space-4)',
      borderTop: 'var(--border-hair) solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    id: "pa-live",
    size: "sm",
    checked: live,
    onChange: () => setLive(!live),
    label: "Actief"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, live ? /*#__PURE__*/React.createElement(CountIn, {
    label: "Rapport wordt opgebouwd"
  }) : /*#__PURE__*/React.createElement("span", {
    className: "caption"
  }, "Gepauzeerd")))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-8) 0',
      background: 'var(--paper-sunk)',
      borderTop: 'var(--border-hair) solid var(--hairline)',
      borderBottom: 'var(--border-hair) solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Hoe het werkt"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gutter)',
      marginTop: 'var(--space-6)'
    }
  }, [{
    n: '1',
    t: 'Koppel je bronnen',
    b: 'Power BI, Dynamics 365, Outlook, Teams, SharePoint. Alles wat in je Microsoft-omgeving leeft, kan als input dienen.'
  }, {
    n: '2',
    t: 'Beschrijf wat je wilt weten',
    b: '"Elke maandag om 8:00 een salesoverzicht per regio met afwijkingen ten opzichte van vorige maand."'
  }, {
    n: '3',
    t: 'Ontvang het rapport',
    b: 'Ingepland, of op trigger. In je mailbox, in Teams, of waar jij het wilt hebben.'
  }].map((s, i) => /*#__PURE__*/React.createElement(Card, {
    key: s.n,
    className: "m-rise",
    style: {
      animationDelay: i * 60 + 'ms'
    },
    eyebrow: 'Stap ' + s.n,
    title: s.t
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-small)',
      lineHeight: 1.6,
      marginBottom: 0
    }
  }, s.b)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-9) 0'
    }
  }, /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Voorbeelden",
    lead: "Kies een voorbeeld om te zien hoe het eruitziet."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: Object.keys(EXAMPLES).map(k => ({
      value: k,
      label: EXAMPLES[k].title
    }))
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 'var(--gutter)',
      marginTop: 'var(--space-6)'
    }
  }, Object.entries(EXAMPLES).map(([k, e]) => /*#__PURE__*/React.createElement(Card, {
    key: k,
    variant: k === tab ? 'hairline' : 'sunk',
    style: {
      borderColor: k === tab ? 'var(--turquoise)' : undefined
    },
    title: e.title
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--size-small)',
      lineHeight: 1.6
    }
  }, e.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: 'var(--slate)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 15
  }), e.schedule)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--space-8) 0',
      background: 'var(--deep-teal)'
    }
  }, /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#FFFFFF'
    }
  }, "Waarom niet gewoon Copilot?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--chalk)',
      marginTop: 'var(--space-4)'
    }
  }, "Copilot is een assistent: je stelt een vraag, je krijgt een antwoord. Power AI is een collega: het weet wat je elke week nodig hebt en levert het aan zonder dat je erom vraagt."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--chalk)',
      marginBottom: 0
    }
  }, "En ja \u2014 het werkt prima naast Copilot.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      justifyContent: 'center'
    }
  }, ['Werkt over meerdere bronnen tegelijk', 'Kent jouw definities en jouw opmaak', 'Draait op schema, niet op verzoek'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center',
      color: 'var(--chalk)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 20,
    color: "var(--turquoise)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--size-body)'
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    ground: "dark",
    icon: "arrow-right",
    onClick: onContact
  }, "Vraag een demo aan")))))));
}
Object.assign(window, {
  PowerAIScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PowerAIScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
const {
  Button,
  IconButton,
  Wordmark,
  Icon,
  RhythmRule,
  Card,
  Badge,
  Tag,
  Tabs,
  Field,
  Input,
  Select,
  Checkbox,
  Radio,
  Switch,
  Dialog,
  Toast,
  Tooltip,
  CountIn
} = window.MaistrosDesignSystem_d1f3c1;
const NAV = [{
  id: 'home',
  label: 'Home'
}, {
  id: 'power',
  label: 'Power AI'
}, {
  id: 'agents',
  label: 'AI-agents op maat'
}, {
  id: 'advies',
  label: 'Advies'
}, {
  id: 'over',
  label: 'Over ons'
}];
function Shell({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: '0 32px'
    }
  }, children);
}
function SiteHeader({
  route,
  onNavigate,
  onContact
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: 'rgba(250,246,241,.88)',
      backdropFilter: 'blur(10px)',
      borderBottom: 'var(--border-hair) solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      height: 76
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    onClick: e => {
      e.preventDefault();
      onNavigate('home');
    },
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 26
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      marginLeft: 'var(--space-4)'
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: '#' + n.id,
    onClick: e => {
      e.preventDefault();
      onNavigate(n.id);
    },
    style: {
      fontSize: 'var(--size-small)',
      fontWeight: route === n.id ? 600 : 400,
      color: route === n.id ? 'var(--deep-teal)' : 'var(--slate)',
      textDecoration: 'none',
      paddingBottom: 2,
      borderBottom: route === n.id ? '2px solid var(--turquoise)' : '2px solid transparent'
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    onClick: () => onNavigate('over')
  }, "Contact"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    icon: "calendar-check",
    iconPosition: "left",
    onClick: onContact
  }, "Plan een kennismaking")))));
}
function SiteFooter({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--deep-teal)',
      color: 'var(--chalk)',
      padding: 'var(--space-8) 0 var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Shell, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 260
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 34,
    ground: "dark",
    descriptor: "AI die werkt. Ook bij jullie."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-8)',
      marginLeft: 'auto',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--turquoise)',
      marginBottom: 'var(--space-3)'
    }
  }, "Diensten"), ['Power AI', 'AI-agents op maat', 'Advies'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 14,
      color: 'var(--chalk)',
      textDecorationColor: 'var(--hairline-dark)'
    }
  }, t)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--turquoise)',
      marginBottom: 'var(--space-3)'
    }
  }, "Bedrijf"), ['Over ons', 'Contact', 'LinkedIn'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 14,
      color: 'var(--chalk)',
      textDecorationColor: 'var(--hairline-dark)'
    }
  }, t)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(RhythmRule, {
    color: "dark",
    marks: 13,
    pattern: "phrase"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-4)',
      fontSize: 13,
      color: 'var(--muted-chalk)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "maistros \u2014 AI die werkt. Ook bij jullie."), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto'
    }
  }, "Gevestigd in Nederland"))));
}
function SectionHead({
  eyebrow,
  title,
  lead,
  align = 'left'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: align === 'center' ? 720 : 'var(--prose-max)',
      margin: align === 'center' ? '0 auto' : 0,
      textAlign: align
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--size-small)',
      fontWeight: 600,
      color: 'var(--turquoise)',
      marginBottom: 'var(--space-3)'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", null, title), lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      marginBottom: 0,
      color: 'var(--graphite)'
    }
  }, lead) : null);
}
function ContactDialog({
  open,
  onClose,
  onSent
}) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (open) setSent(false);
  }, [open]);
  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: onClose,
    width: 560,
    title: "Plan een kennismaking",
    description: "Een uur aan tafel. Jij vertelt hoe het werk loopt, wij vertellen eerlijk waar AI wel en niet helpt.",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "Annuleren"), /*#__PURE__*/React.createElement(Button, {
      icon: "arrow-right",
      onClick: () => {
        setSent(true);
        onSent && onSent();
        onClose();
      }
    }, "Versturen"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Naam",
    htmlFor: "cd-n"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "cd-n",
    placeholder: "Voor- en achternaam"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Werkmail",
    htmlFor: "cd-m"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "cd-m",
    type: "email",
    icon: "mail",
    placeholder: "jij@bedrijf.nl"
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Aantal medewerkers",
    htmlFor: "cd-s",
    hint: "We werken met bedrijven van 50 tot 250 medewerkers."
  }, /*#__PURE__*/React.createElement(Select, {
    id: "cd-s",
    placeholder: "Kies een bereik",
    options: ['50–100', '100–175', '175–250', 'Meer dan 250']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Wat speelt er?",
    htmlFor: "cd-t"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "cd-t",
    multiline: true,
    rows: 3,
    placeholder: "Vertel kort wat er speelt."
  })), /*#__PURE__*/React.createElement(Checkbox, {
    id: "cd-c",
    label: "Stuur me vooraf de agenda",
    description: "E\xE9n A4, geen slidedeck."
  })));
}
Object.assign(window, {
  Shell,
  SiteHeader,
  SiteFooter,
  SectionHead,
  ContactDialog,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.RhythmRule = __ds_scope.RhythmRule;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.LogoIcon = __ds_scope.LogoIcon;

__ds_ns.CountIn = __ds_scope.CountIn;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
