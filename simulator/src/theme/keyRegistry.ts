export type ContrastRole = 'text' | 'ui' | 'dim' | 'none';

export interface KeyMeta {
  key: string;
  group: string;
  description: string;
  role: ContrastRole;
  /** Key(s) this color is rendered against. First entry wins for the badge. */
  pair?: string[];
}

const meta = (
  key: string,
  group: string,
  description: string,
  role: ContrastRole,
  pair?: string[],
): KeyMeta => ({ key, group, description, role, pair });

export const KEY_REGISTRY: readonly KeyMeta[] = [
  // Globals
  meta('foreground', 'Globals', 'Default UI text color', 'text', ['editor.background']),
  meta('descriptionForeground', 'Globals', 'Secondary text (descriptions, hints)', 'dim', ['editor.background']),
  meta('disabledForeground', 'Globals', 'Disabled UI element text', 'dim', ['editor.background']),
  meta('errorForeground', 'Globals', 'Error text color', 'text', ['editor.background']),
  meta('icon.foreground', 'Globals', 'Default icon color', 'ui', ['editor.background']),
  meta('focusBorder', 'Globals', 'Focus outline on interactive elements', 'ui', ['editor.background']),
  meta('selection.background', 'Globals', 'Default text selection background', 'none'),

  // Title bar
  meta('titleBar.activeBackground', 'Title Bar', 'Title bar when window focused', 'none'),
  meta('titleBar.activeForeground', 'Title Bar', 'Title bar text when focused', 'text', ['titleBar.activeBackground']),
  meta('titleBar.inactiveBackground', 'Title Bar', 'Title bar when window unfocused', 'none'),
  meta('titleBar.inactiveForeground', 'Title Bar', 'Title bar text when unfocused', 'dim', ['titleBar.inactiveBackground']),
  meta('titleBar.border', 'Title Bar', 'Border under title bar', 'ui', ['titleBar.activeBackground']),

  // Activity bar
  meta('activityBar.background', 'Activity Bar', 'Activity bar background', 'none'),
  meta('activityBar.foreground', 'Activity Bar', 'Active icon color', 'ui', ['activityBar.background']),
  meta('activityBar.inactiveForeground', 'Activity Bar', 'Inactive icon color', 'dim', ['activityBar.background']),
  meta('activityBar.border', 'Activity Bar', 'Border between activity and side bars', 'ui', ['activityBar.background']),
  meta('activityBarBadge.background', 'Activity Bar', 'Badge background (unread counts)', 'none'),
  meta('activityBarBadge.foreground', 'Activity Bar', 'Badge text', 'text', ['activityBarBadge.background']),

  // Side bar
  meta('sideBar.background', 'Side Bar', 'Side bar (explorer) background', 'none'),
  meta('sideBar.foreground', 'Side Bar', 'Side bar text', 'text', ['sideBar.background']),
  meta('sideBar.border', 'Side Bar', 'Side bar right border', 'ui', ['sideBar.background']),
  meta('sideBarTitle.foreground', 'Side Bar', 'Side bar title text (e.g. EXPLORER)', 'text', ['sideBar.background']),
  meta('sideBarSectionHeader.background', 'Side Bar', 'Folder/section header background', 'none'),
  meta('sideBarSectionHeader.foreground', 'Side Bar', 'Folder/section header text', 'text', ['sideBarSectionHeader.background']),
  meta('sideBarSectionHeader.border', 'Side Bar', 'Border around section headers', 'ui', ['sideBarSectionHeader.background']),

  // Editor
  meta('editor.background', 'Editor', 'Editor background', 'none'),
  meta('editor.foreground', 'Editor', 'Default editor text', 'text', ['editor.background']),
  meta('editor.lineHighlightBackground', 'Editor', 'Current-line highlight', 'none'),
  meta('editor.selectionBackground', 'Editor', 'Text selection', 'none'),
  meta('editor.selectionHighlightBackground', 'Editor', 'Matches of selected text', 'none'),
  meta('editor.wordHighlightBackground', 'Editor', 'Matches of symbol under cursor', 'none'),
  meta('editor.wordHighlightStrongBackground', 'Editor', 'Write-occurrence of symbol', 'none'),
  meta('editor.findMatchBackground', 'Editor', 'Current find match', 'none'),
  meta('editor.findMatchHighlightBackground', 'Editor', 'Other find matches', 'none'),
  meta('editorCursor.foreground', 'Editor', 'Caret color', 'ui', ['editor.background']),
  meta('editorLineNumber.foreground', 'Editor', 'Line number gutter (inactive)', 'dim', ['editor.background']),
  meta('editorLineNumber.activeForeground', 'Editor', 'Line number on active line', 'text', ['editor.background']),
  meta('editorIndentGuide.background1', 'Editor', 'Indent guide lines', 'ui', ['editor.background']),
  meta('editorIndentGuide.activeBackground1', 'Editor', 'Active indent guide line', 'ui', ['editor.background']),
  meta('editorBracketMatch.background', 'Editor', 'Matching bracket background', 'none'),
  meta('editorBracketMatch.border', 'Editor', 'Matching bracket outline', 'ui', ['editor.background']),
  meta('editorGroup.border', 'Editor', 'Border between editor groups', 'ui', ['editor.background']),
  meta('editorGroupHeader.tabsBackground', 'Editor', 'Tab strip background', 'none'),
  meta('editorGroupHeader.tabsBorder', 'Editor', 'Border under tab strip', 'ui', ['editorGroupHeader.tabsBackground']),
  meta('editorGroupHeader.border', 'Editor', 'Border under editor group header', 'ui', ['editorGroupHeader.tabsBackground']),

  // Tabs
  meta('tab.activeBackground', 'Tabs', 'Active tab background', 'none'),
  meta('tab.activeForeground', 'Tabs', 'Active tab text', 'text', ['tab.activeBackground']),
  meta('tab.activeBorder', 'Tabs', 'Border below active tab', 'ui', ['tab.activeBackground']),
  meta('tab.activeBorderTop', 'Tabs', 'Border above active tab (accent)', 'ui', ['tab.activeBackground']),
  meta('tab.inactiveBackground', 'Tabs', 'Inactive tab background', 'none'),
  meta('tab.inactiveForeground', 'Tabs', 'Inactive tab text', 'dim', ['tab.inactiveBackground']),
  meta('tab.border', 'Tabs', 'Border between tabs', 'ui', ['tab.inactiveBackground']),
  meta('tab.hoverBackground', 'Tabs', 'Tab background on hover', 'none'),
  meta('tab.hoverForeground', 'Tabs', 'Tab text on hover', 'text', ['tab.hoverBackground']),
  meta('tab.unfocusedActiveBorderTop', 'Tabs', 'Active-tab top border when group unfocused', 'ui', ['tab.activeBackground']),

  // Panel
  meta('panel.background', 'Panel', 'Bottom panel background', 'none'),
  meta('panel.border', 'Panel', 'Border above panel', 'ui', ['panel.background']),
  meta('panelTitle.activeForeground', 'Panel', 'Active panel tab text', 'text', ['panel.background']),
  meta('panelTitle.inactiveForeground', 'Panel', 'Inactive panel tab text', 'dim', ['panel.background']),
  meta('panelTitle.activeBorder', 'Panel', 'Underline on active panel tab', 'ui', ['panel.background']),

  // Terminal
  meta('terminal.background', 'Terminal', 'Terminal background', 'none'),
  meta('terminal.foreground', 'Terminal', 'Default terminal text', 'text', ['terminal.background']),
  meta('terminalCursor.foreground', 'Terminal', 'Terminal cursor', 'ui', ['terminal.background']),
  meta('terminal.ansiBlack', 'Terminal', 'ANSI black', 'ui', ['terminal.background']),
  meta('terminal.ansiBrightBlack', 'Terminal', 'ANSI bright black (PowerShell DarkGray)', 'ui', ['terminal.background']),
  meta('terminal.ansiRed', 'Terminal', 'ANSI red', 'ui', ['terminal.background']),
  meta('terminal.ansiBrightRed', 'Terminal', 'ANSI bright red', 'ui', ['terminal.background']),
  meta('terminal.ansiGreen', 'Terminal', 'ANSI green', 'ui', ['terminal.background']),
  meta('terminal.ansiBrightGreen', 'Terminal', 'ANSI bright green', 'ui', ['terminal.background']),
  meta('terminal.ansiYellow', 'Terminal', 'ANSI yellow', 'ui', ['terminal.background']),
  meta('terminal.ansiBrightYellow', 'Terminal', 'ANSI bright yellow', 'ui', ['terminal.background']),
  meta('terminal.ansiBlue', 'Terminal', 'ANSI blue', 'ui', ['terminal.background']),
  meta('terminal.ansiBrightBlue', 'Terminal', 'ANSI bright blue', 'ui', ['terminal.background']),
  meta('terminal.ansiMagenta', 'Terminal', 'ANSI magenta', 'ui', ['terminal.background']),
  meta('terminal.ansiBrightMagenta', 'Terminal', 'ANSI bright magenta', 'ui', ['terminal.background']),
  meta('terminal.ansiCyan', 'Terminal', 'ANSI cyan', 'ui', ['terminal.background']),
  meta('terminal.ansiBrightCyan', 'Terminal', 'ANSI bright cyan', 'ui', ['terminal.background']),
  meta('terminal.ansiWhite', 'Terminal', 'ANSI white', 'ui', ['terminal.background']),
  meta('terminal.ansiBrightWhite', 'Terminal', 'ANSI bright white', 'ui', ['terminal.background']),
  meta('terminal.ansiOrange', 'Terminal', 'ANSI orange (legacy extension)', 'ui', ['terminal.background']),

  // Status bar
  meta('statusBar.background', 'Status Bar', 'Status bar background', 'none'),
  meta('statusBar.foreground', 'Status Bar', 'Status bar text', 'text', ['statusBar.background']),
  meta('statusBar.border', 'Status Bar', 'Status bar top border', 'ui', ['statusBar.background']),
  meta('statusBar.noFolderBackground', 'Status Bar', 'Status bar bg when no folder open', 'none'),
  meta('statusBarItem.hoverBackground', 'Status Bar', 'Status item hover bg', 'none'),
  meta('statusBarItem.activeBackground', 'Status Bar', 'Status item active bg', 'none'),

  // Inputs
  meta('input.background', 'Inputs', 'Text input background', 'none'),
  meta('input.foreground', 'Inputs', 'Text input text', 'text', ['input.background']),
  meta('input.border', 'Inputs', 'Text input border', 'ui', ['input.background']),
  meta('input.placeholderForeground', 'Inputs', 'Placeholder text', 'dim', ['input.background']),
  meta('inputOption.activeBorder', 'Inputs', 'Active option border (e.g. case-match)', 'ui', ['input.background']),
  meta('inputValidation.errorBackground', 'Inputs', 'Validation error background', 'none'),
  meta('inputValidation.errorBorder', 'Inputs', 'Validation error border', 'ui', ['inputValidation.errorBackground']),

  // Dropdowns
  meta('dropdown.background', 'Dropdowns', 'Dropdown background', 'none'),
  meta('dropdown.foreground', 'Dropdowns', 'Dropdown text', 'text', ['dropdown.background']),
  meta('dropdown.border', 'Dropdowns', 'Dropdown border', 'ui', ['dropdown.background']),

  // Buttons
  meta('button.background', 'Buttons', 'Primary button background', 'none'),
  meta('button.foreground', 'Buttons', 'Primary button text', 'text', ['button.background']),
  meta('button.hoverBackground', 'Buttons', 'Primary button hover bg', 'none'),
  meta('button.secondaryBackground', 'Buttons', 'Secondary button background', 'none'),
  meta('button.secondaryForeground', 'Buttons', 'Secondary button text', 'text', ['button.secondaryBackground']),
  meta('button.secondaryHoverBackground', 'Buttons', 'Secondary button hover bg', 'none'),

  // Lists
  meta('list.activeSelectionBackground', 'Lists', 'Selected list item (focused list)', 'none'),
  meta('list.activeSelectionForeground', 'Lists', 'Selected list item text', 'text', ['list.activeSelectionBackground']),
  meta('list.inactiveSelectionBackground', 'Lists', 'Selected item when list unfocused', 'none'),
  meta('list.inactiveSelectionForeground', 'Lists', 'Selected item text when list unfocused', 'text', ['list.inactiveSelectionBackground']),
  meta('list.hoverBackground', 'Lists', 'Hovered list item', 'none'),
  meta('list.hoverForeground', 'Lists', 'Hovered list item text', 'text', ['list.hoverBackground']),
  meta('list.focusBackground', 'Lists', 'Focused list item', 'none'),
  meta('list.focusForeground', 'Lists', 'Focused list item text', 'text', ['list.focusBackground']),
  meta('list.highlightForeground', 'Lists', 'Search-match highlight in list', 'text', ['sideBar.background']),
  meta('list.dropBackground', 'Lists', 'Drop target background', 'none'),
  meta('list.inactiveFocusBackground', 'Lists', 'Focused item bg when list unfocused', 'none'),

  // Editor widgets
  meta('editorWidget.background', 'Editor Widgets', 'Find widget / rename box background', 'none'),
  meta('editorWidget.foreground', 'Editor Widgets', 'Editor widget text', 'text', ['editorWidget.background']),
  meta('editorWidget.border', 'Editor Widgets', 'Editor widget border', 'ui', ['editorWidget.background']),
  meta('editorSuggestWidget.background', 'Editor Widgets', 'IntelliSense dropdown bg', 'none'),
  meta('editorSuggestWidget.foreground', 'Editor Widgets', 'IntelliSense text', 'text', ['editorSuggestWidget.background']),
  meta('editorSuggestWidget.border', 'Editor Widgets', 'IntelliSense border', 'ui', ['editorSuggestWidget.background']),
  meta('editorSuggestWidget.selectedBackground', 'Editor Widgets', 'Selected IntelliSense item', 'none'),
  meta('editorSuggestWidget.highlightForeground', 'Editor Widgets', 'Match-highlight in IntelliSense', 'text', ['editorSuggestWidget.background']),
  meta('editorHoverWidget.background', 'Editor Widgets', 'Hover tooltip background', 'none'),
  meta('editorHoverWidget.foreground', 'Editor Widgets', 'Hover tooltip text', 'text', ['editorHoverWidget.background']),
  meta('editorHoverWidget.border', 'Editor Widgets', 'Hover tooltip border', 'ui', ['editorHoverWidget.background']),

  // Notifications
  meta('notifications.background', 'Notifications', 'Notification toast bg', 'none'),
  meta('notifications.foreground', 'Notifications', 'Notification text', 'text', ['notifications.background']),
  meta('notifications.border', 'Notifications', 'Notification border', 'ui', ['notifications.background']),
  meta('notificationCenterHeader.background', 'Notifications', 'Notification center header', 'none'),
  meta('notificationCenterHeader.foreground', 'Notifications', 'Notification center header text', 'text', ['notificationCenterHeader.background']),

  // Menus
  meta('menu.background', 'Menus', 'Context menu bg', 'none'),
  meta('menu.foreground', 'Menus', 'Menu text', 'text', ['menu.background']),
  meta('menu.border', 'Menus', 'Menu border', 'ui', ['menu.background']),
  meta('menu.selectionBackground', 'Menus', 'Selected menu item bg', 'none'),
  meta('menu.selectionForeground', 'Menus', 'Selected menu item text', 'text', ['menu.selectionBackground']),
  meta('menu.separatorBackground', 'Menus', 'Menu separator line', 'ui', ['menu.background']),

  // Breadcrumbs
  meta('breadcrumb.foreground', 'Breadcrumbs', 'Breadcrumb text', 'text', ['breadcrumb.background']),
  meta('breadcrumb.background', 'Breadcrumbs', 'Breadcrumb bar background', 'none'),
  meta('breadcrumb.focusForeground', 'Breadcrumbs', 'Focused breadcrumb segment', 'text', ['breadcrumb.background']),
  meta('breadcrumb.activeSelectionForeground', 'Breadcrumbs', 'Active breadcrumb', 'text', ['breadcrumb.background']),
  meta('breadcrumbPicker.background', 'Breadcrumbs', 'Breadcrumb dropdown bg', 'none'),

  // Text / markdown
  meta('textBlockQuote.background', 'Text', 'Blockquote background', 'none'),
  meta('textBlockQuote.border', 'Text', 'Blockquote left border', 'ui', ['textBlockQuote.background']),
  meta('textCodeBlock.background', 'Text', 'Inline code block bg', 'none'),
  meta('textLink.foreground', 'Text', 'Hyperlink color', 'text', ['editor.background']),
  meta('textLink.activeForeground', 'Text', 'Hyperlink hover color', 'text', ['editor.background']),
  meta('textPreformat.foreground', 'Text', 'Preformatted text (inline code)', 'text', ['editor.background']),
  meta('textSeparator.foreground', 'Text', 'Horizontal rule / separator', 'ui', ['editor.background']),

  // Peek view
  meta('peekView.border', 'Peek View', 'Peek view outline', 'ui', ['editor.background']),
  meta('peekViewEditor.background', 'Peek View', 'Peek view editor bg', 'none'),
  meta('peekViewResult.background', 'Peek View', 'Peek view results list bg', 'none'),
  meta('peekViewResult.foreground', 'Peek View', 'Peek view results text', 'text', ['peekViewResult.background']),
  meta('peekViewTitle.background', 'Peek View', 'Peek view title bar bg', 'none'),
  meta('peekViewTitleLabel.foreground', 'Peek View', 'Peek view title text', 'text', ['peekViewTitle.background']),

  // Git decorations
  meta('gitDecoration.modifiedResourceForeground', 'Git', 'Modified file (M) color', 'ui', ['sideBar.background']),
  meta('gitDecoration.deletedResourceForeground', 'Git', 'Deleted file color', 'ui', ['sideBar.background']),
  meta('gitDecoration.untrackedResourceForeground', 'Git', 'Untracked file (U) color', 'ui', ['sideBar.background']),
  meta('gitDecoration.ignoredResourceForeground', 'Git', 'Ignored file color', 'dim', ['sideBar.background']),
  meta('gitDecoration.conflictingResourceForeground', 'Git', 'Merge conflict file color', 'ui', ['sideBar.background']),

  // Scrollbars & badges
  meta('scrollbarSlider.background', 'Scrollbars', 'Scrollbar thumb', 'ui', ['editor.background']),
  meta('scrollbarSlider.hoverBackground', 'Scrollbars', 'Scrollbar thumb hover', 'ui', ['editor.background']),
  meta('scrollbarSlider.activeBackground', 'Scrollbars', 'Scrollbar thumb active', 'ui', ['editor.background']),
  meta('badge.background', 'Badges', 'Generic badge bg', 'none'),
  meta('badge.foreground', 'Badges', 'Generic badge text', 'text', ['badge.background']),

  // Settings editor
  meta('settings.headerForeground', 'Settings', 'Section + setting titles (commonly forgotten)', 'text', ['editor.background']),
  meta('settings.settingsHeaderHoverForeground', 'Settings', 'Setting title on hover', 'text', ['editor.background']),
  meta('settings.modifiedItemIndicator', 'Settings', 'Modified setting dot/line', 'ui', ['editor.background']),
  meta('settings.dropdownForeground', 'Settings', 'Settings dropdown text', 'text', ['settings.dropdownBackground']),
  meta('settings.dropdownBackground', 'Settings', 'Settings dropdown bg', 'none'),
  meta('settings.dropdownBorder', 'Settings', 'Settings dropdown border', 'ui', ['settings.dropdownBackground']),
  meta('settings.dropdownListBorder', 'Settings', 'Settings dropdown open-list border', 'ui', ['settings.dropdownBackground']),
  meta('settings.checkboxBackground', 'Settings', 'Settings checkbox bg', 'none'),
  meta('settings.checkboxForeground', 'Settings', 'Settings checkbox check mark', 'ui', ['settings.checkboxBackground']),
  meta('settings.checkboxBorder', 'Settings', 'Settings checkbox border', 'ui', ['settings.checkboxBackground']),
  meta('settings.rowHoverBackground', 'Settings', 'Settings row hover', 'none'),
  meta('settings.textInputBackground', 'Settings', 'Settings text input bg', 'none'),
  meta('settings.textInputForeground', 'Settings', 'Settings text input text', 'text', ['settings.textInputBackground']),
  meta('settings.textInputBorder', 'Settings', 'Settings text input border', 'ui', ['settings.textInputBackground']),
  meta('settings.numberInputBackground', 'Settings', 'Settings number input bg', 'none'),
  meta('settings.numberInputForeground', 'Settings', 'Settings number input text', 'text', ['settings.numberInputBackground']),
  meta('settings.numberInputBorder', 'Settings', 'Settings number input border', 'ui', ['settings.numberInputBackground']),
  meta('settings.focusedRowBackground', 'Settings', 'Focused settings row bg', 'none'),
  meta('settings.focusedRowBorder', 'Settings', 'Focused settings row border', 'ui', ['editor.background']),
  meta('settings.headerBorder', 'Settings', 'Settings header border', 'ui', ['editor.background']),
  meta('settings.sashBorder', 'Settings', 'Settings two-pane divider', 'ui', ['editor.background']),

  // Checkbox (top-level)
  meta('checkbox.background', 'Checkbox', 'Checkbox bg', 'none'),
  meta('checkbox.foreground', 'Checkbox', 'Checkbox check mark', 'ui', ['checkbox.background']),
  meta('checkbox.border', 'Checkbox', 'Checkbox border', 'ui', ['checkbox.background']),
  meta('checkbox.selectBackground', 'Checkbox', 'Checked checkbox bg', 'none'),
  meta('checkbox.selectBorder', 'Checkbox', 'Checked checkbox border', 'ui', ['checkbox.selectBackground']),

  // Keybinding table
  meta('keybindingTable.headerBackground', 'Keybinding Table', 'Header row bg', 'none'),
  meta('keybindingTable.rowsBackground', 'Keybinding Table', 'Odd-row bg', 'none'),

  // Quick input / command palette
  meta('quickInput.background', 'Quick Input', 'Command palette bg', 'none'),
  meta('quickInput.foreground', 'Quick Input', 'Command palette text', 'text', ['quickInput.background']),
  meta('quickInputTitle.background', 'Quick Input', 'Command palette title bar bg', 'none'),
  meta('pickerGroup.foreground', 'Quick Input', 'Group separator text', 'text', ['quickInput.background']),
  meta('pickerGroup.border', 'Quick Input', 'Group separator line', 'ui', ['quickInput.background']),

  // Chat (Claude Code)
  meta('chat.requestBackground', 'Chat', 'User request bubble bg', 'none'),
  meta('chat.requestBorder', 'Chat', 'User request bubble border', 'ui', ['chat.requestBackground']),
  meta('chat.slashCommandBackground', 'Chat', 'Slash-command chip bg', 'none'),
  meta('chat.slashCommandForeground', 'Chat', 'Slash-command chip text', 'text', ['chat.slashCommandBackground']),
  meta('chat.avatarBackground', 'Chat', 'Chat avatar bg', 'none'),
  meta('chat.avatarForeground', 'Chat', 'Chat avatar glyph', 'text', ['chat.avatarBackground']),
  meta('chat.editedFileForeground', 'Chat', 'Edited-file indicator color', 'ui', ['editor.background']),
  meta('symbolIcon.fileForeground', 'Chat', 'File symbol icon (@file chips)', 'ui', ['chat.slashCommandBackground']),
  meta('symbolIcon.folderForeground', 'Chat', 'Folder symbol icon', 'ui', ['chat.slashCommandBackground']),
];

export const KEY_MAP: ReadonlyMap<string, KeyMeta> = new Map(
  KEY_REGISTRY.map((m) => [m.key, m]),
);

export const ALL_KEYS: readonly string[] = KEY_REGISTRY.map((m) => m.key);

export const GROUPS: readonly string[] = Array.from(
  new Set(KEY_REGISTRY.map((m) => m.group)),
);

export const KEYS_BY_GROUP: ReadonlyMap<string, readonly KeyMeta[]> = (() => {
  const out = new Map<string, KeyMeta[]>();
  for (const m of KEY_REGISTRY) {
    const arr = out.get(m.group) ?? [];
    arr.push(m);
    out.set(m.group, arr);
  }
  return out;
})();

export const CSS_VAR_PREFIX = '--vtc-';
export const cssVarName = (key: string) => CSS_VAR_PREFIX + key.replace(/\./g, '_');
