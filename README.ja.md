# vscode-theme<!-- omit in toc -->
VSCode の UI カラーテーマを、ワークスペース（`.vscode/settings.json`）またはグローバル設定に適用する小さなコマンドラインスイッチャーです。既存の `workbench.colorCustomizations` は自動でバックアップされ、リセット時にはきれいに復元されます。

ダーク系・ライト系のテーマを標準で同梱しています（[.vscode-themes/](.vscode-themes/)）。ティールのアクセントを共有する Catppuccin インスパイアのダーク／ライトペア（`frappe-teal` / `dawn-teal`）も含まれています。任意の `<name>.json` をテーマディレクトリに置くだけで追加できます。

> English version: [README.md](README.md)

---

- [テーマプレビュー](#テーマプレビュー)
- [ワークスペースの識別マーカーとしてのテーマ活用](#ワークスペースの識別マーカーとしてのテーマ活用)
- [インストール](#インストール)
  - [macOS / Linux（bash / zsh）](#macos--linuxbash--zsh)
  - [Windows（PowerShell）](#windowspowershell)
- [使い方](#使い方)
- [仕組み](#仕組み)
- [ファイル構成](#ファイル構成)
- [バージョン](#バージョン)
  - [バージョンの伝わり方](#バージョンの伝わり方)

## テーマプレビュー

<style>
.vsc-card .sb-item { cursor: pointer; transition: background .08s ease, color .08s ease; }
.vsc-card .sb-item:not(.sb-active):hover { background: var(--hvr-bg); color: var(--hvr-fg); }
.vsc-card .tab-inactive { cursor: pointer; transition: background .08s ease, color .08s ease; }
.vsc-card .tab-inactive:hover { background: var(--hvr-bg); color: var(--hvr-fg); }
</style>

### A &mdash; Navy + orange<!-- omit in toc -->


> ダークネイビーの背景にオレンジのアクセント。


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Navy + orange theme preview">
  <defs><clipPath id="ca-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#ca-clip)">
    <rect width="640" height="296" fill="#0a1628"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#1a2d4a"><title>titleBar.activeBackground &#8212; #1a2d4a</title></rect>
    <rect y="26" width="640" height="2" fill="#FF9900"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#5a7a9a"><title>titleBar.inactiveForeground &#8212; #5a7a9a</title>vscode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#0f1e33"><title>activityBar.background &#8212; #0f1e33</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#FF9900"><title>activityBar.foreground &#8212; #FF9900</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#3a5a7a" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #3a5a7a</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#3a5a7a" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #3a5a7a</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#0d1b2e"><title>sideBar.background &#8212; #0d1b2e</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#1e3050"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#FF9900"><title>sideBarTitle.foreground &#8212; #FF9900</title>エクスプローラー</text>
    <rect x="36" y="56" width="159" height="18" fill="#FF9900" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #FF9900</title></rect>
    <text x="58" y="69" font-size="11" fill="#FF9900"><title>list.activeSelectionForeground &#8212; #FF9900</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#8aa4c8"><title>sideBar.foreground &#8212; #8aa4c8</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#8aa4c8"><title>sideBar.foreground &#8212; #8aa4c8</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#0a1628"><title>editor.background &#8212; #0a1628</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#0d1b2e"><title>editorGroupHeader.tabsBackground &#8212; #0d1b2e</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#1e3050"/>
    <rect x="196" y="28" width="98" height="22" fill="#0a1628"><title>tab.activeBackground &#8212; #0a1628</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#FF9900"><title>tab.activeBorderTop &#8212; #FF9900</title></rect>
    <text x="210" y="44" font-size="11" fill="#c8d8f0">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#5a7a9a"><title>tab.inactiveForeground &#8212; #5a7a9a</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#2a3f5a"><title>editorLineNumber.foreground &#8212; #2a3f5a</title>1</text>
    <text x="232" y="73" font-size="11" fill="#FF9900">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#c8d8f0">: {</text>
    <text x="216" y="92" font-size="11" fill="#2a3f5a">2</text>
    <text x="246" y="92" font-size="11" fill="#FF9900">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#c8d8f0">:</text>
    <text x="424" y="92" font-size="11" fill="#FF9900"><title>textLink.foreground &#8212; #FF9900</title>&quot;#1a2d4a&quot;</text>
    <text x="216" y="111" font-size="11" fill="#2a3f5a">3</text>
    <text x="232" y="111" font-size="11" fill="#c8d8f0">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#080f1e"><title>panel.background &#8212; #080f1e</title></rect>
    <rect y="203" width="640" height="1" fill="#1e3050"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#2a3f5a"><title>panelTitle.inactiveForeground &#8212; #2a3f5a</title>問題</text>
    <text x="50" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#2a3f5a">出力</text>
    <text x="86" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#2a3f5a">デバッグ コンソール</text>
    <text x="210" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#c8d8f0"><title>panelTitle.activeForeground &#8212; #c8d8f0</title>ターミナル</text>
    <text x="270" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#2a3f5a">GITLENS</text>
    <rect x="210" y="203" width="56" height="1" fill="#FF9900"><title>panelTitle.activeBorder &#8212; #FF9900</title></rect>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#c8d8f0"><title>terminal.foreground &#8212; #c8d8f0</title>PS C:\experiment\vscode-theme&gt; vscode-theme set navy-orange</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#0DBC79"><title>terminal.ansiGreen &#8212; #0DBC79</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#c8d8f0">テーマをワークスペースに適用しました。</text>
    <text x="14" y="257" font-size="11" fill="#c8d8f0">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#FF9900"><title>terminalCursor.foreground &#8212; #FF9900</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#1a2d4a"><title>statusBar.background &#8212; #1a2d4a</title></rect>
    <rect y="274" width="640" height="1" fill="#FF9900" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#c8d8f0" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#c8d8f0" opacity="0.85">問題なし</text>
  </g>
</svg>
</div>

**テーマ名:** `navy-orange`  
**アクセント:** `#FF9900` &middot; **背景:** `#0a1628` &middot; **タイトルバー:** `#1a2d4a`

---

### B &mdash; Squid ink + yellow<!-- omit in toc -->


> 深いスクイッドインク（イカ墨）色の背景にゴールドイエローのアクセント。


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Squid ink + yellow theme preview">
  <defs><clipPath id="cb-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#cb-clip)">
    <rect width="640" height="296" fill="#161e28"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#232f3e"><title>titleBar.activeBackground &#8212; #232f3e</title></rect>
    <rect y="26" width="640" height="2" fill="#FFD700"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#5a7080"><title>titleBar.inactiveForeground &#8212; #5a7080</title>vscode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#1a2330"><title>activityBar.background &#8212; #1a2330</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#FFD700"><title>activityBar.foreground &#8212; #FFD700</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#445566" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #445566</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#445566" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #445566</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#1e2a38"><title>sideBar.background &#8212; #1e2a38</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#263040"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#FFD700"><title>sideBarTitle.foreground &#8212; #FFD700</title>エクスプローラー</text>
    <rect x="36" y="56" width="159" height="18" fill="#FFD700" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #FFD700</title></rect>
    <text x="58" y="69" font-size="11" fill="#FFD700"><title>list.activeSelectionForeground &#8212; #FFD700</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#8899aa"><title>sideBar.foreground &#8212; #8899aa</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#8899aa"><title>sideBar.foreground &#8212; #8899aa</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#161e28"><title>editor.background &#8212; #161e28</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#1e2a38"><title>editorGroupHeader.tabsBackground &#8212; #1e2a38</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#263040"/>
    <rect x="196" y="28" width="98" height="22" fill="#161e28"><title>tab.activeBackground &#8212; #161e28</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#FFD700"><title>tab.activeBorderTop &#8212; #FFD700</title></rect>
    <text x="210" y="44" font-size="11" fill="#ccdde8">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#5a7080"><title>tab.inactiveForeground &#8212; #5a7080</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#334455"><title>editorLineNumber.foreground &#8212; #334455</title>1</text>
    <text x="232" y="73" font-size="11" fill="#FFD700">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#ccdde8">: {</text>
    <text x="216" y="92" font-size="11" fill="#334455">2</text>
    <text x="246" y="92" font-size="11" fill="#FFD700">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#ccdde8">:</text>
    <text x="424" y="92" font-size="11" fill="#FFD700"><title>textLink.foreground &#8212; #FFD700</title>&quot;#232f3e&quot;</text>
    <text x="216" y="111" font-size="11" fill="#334455">3</text>
    <text x="232" y="111" font-size="11" fill="#ccdde8">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#111820"><title>panel.background &#8212; #111820</title></rect>
    <rect y="203" width="640" height="1" fill="#263040"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#334455"><title>panelTitle.inactiveForeground &#8212; #334455</title>問題</text>
    <text x="50" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#334455">出力</text>
    <text x="86" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#334455">デバッグ コンソール</text>
    <text x="210" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#ccdde8"><title>panelTitle.activeForeground &#8212; #ccdde8</title>ターミナル</text>
    <text x="270" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#334455">GITLENS</text>
    <rect x="210" y="203" width="56" height="1" fill="#FFD700"><title>panelTitle.activeBorder &#8212; #FFD700</title></rect>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#ccdde8"><title>terminal.foreground &#8212; #ccdde8</title>PS C:\experiment\vscode-theme&gt; vscode-theme set squidink-yellow</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#0DBC79"><title>terminal.ansiGreen &#8212; #0DBC79</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#ccdde8">テーマをワークスペースに適用しました。</text>
    <text x="14" y="257" font-size="11" fill="#ccdde8">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#FFD700"><title>terminalCursor.foreground &#8212; #FFD700</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#232f3e"><title>statusBar.background &#8212; #232f3e</title></rect>
    <rect y="274" width="640" height="1" fill="#FFD700" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#ccd8e8" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#ccd8e8" opacity="0.85">問題なし</text>
  </g>
</svg>
</div>

**テーマ名:** `squidink-yellow`  
**アクセント:** `#FFD700` &middot; **背景:** `#161e28` &middot; **タイトルバー:** `#232f3e`

---

### C &mdash; Bedrock teal<!-- omit in toc -->


> ダークティールの背景にシアングリーンのアクセント。


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Bedrock teal theme preview">
  <defs><clipPath id="cc-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#cc-clip)">
    <rect width="640" height="296" fill="#061616"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#0d2b2b"><title>titleBar.activeBackground &#8212; #0d2b2b</title></rect>
    <rect y="26" width="640" height="2" fill="#01A88D"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#3a7070"><title>titleBar.inactiveForeground &#8212; #3a7070</title>vscode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#081e1e"><title>activityBar.background &#8212; #081e1e</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#01A88D"><title>activityBar.foreground &#8212; #01A88D</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#1a4040" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #1a4040</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#1a4040" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #1a4040</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#0a2020"><title>sideBar.background &#8212; #0a2020</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#0f2a2a"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#01A88D"><title>sideBarTitle.foreground &#8212; #01A88D</title>エクスプローラー</text>
    <rect x="36" y="56" width="159" height="18" fill="#01A88D" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #01A88D</title></rect>
    <text x="58" y="69" font-size="11" fill="#01A88D"><title>list.activeSelectionForeground &#8212; #01A88D</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#5a9090"><title>sideBar.foreground &#8212; #5a9090</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#5a9090"><title>sideBar.foreground &#8212; #5a9090</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#061616"><title>editor.background &#8212; #061616</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#0a2020"><title>editorGroupHeader.tabsBackground &#8212; #0a2020</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#0f2a2a"/>
    <rect x="196" y="28" width="98" height="22" fill="#061616"><title>tab.activeBackground &#8212; #061616</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#01A88D"><title>tab.activeBorderTop &#8212; #01A88D</title></rect>
    <text x="210" y="44" font-size="11" fill="#b8d8d4">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#3a7070"><title>tab.inactiveForeground &#8212; #3a7070</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#1a3838"><title>editorLineNumber.foreground &#8212; #1a3838</title>1</text>
    <text x="232" y="73" font-size="11" fill="#01A88D">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#b8d8d4">: {</text>
    <text x="216" y="92" font-size="11" fill="#1a3838">2</text>
    <text x="246" y="92" font-size="11" fill="#01A88D">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#b8d8d4">:</text>
    <text x="424" y="92" font-size="11" fill="#01A88D"><title>textLink.foreground &#8212; #01A88D</title>&quot;#0d2b2b&quot;</text>
    <text x="216" y="111" font-size="11" fill="#1a3838">3</text>
    <text x="232" y="111" font-size="11" fill="#b8d8d4">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#040e0e"><title>panel.background &#8212; #040e0e</title></rect>
    <rect y="203" width="640" height="1" fill="#0f2a2a"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#1a3838"><title>panelTitle.inactiveForeground &#8212; #1a3838</title>問題</text>
    <text x="50" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#1a3838">出力</text>
    <text x="86" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#1a3838">デバッグ コンソール</text>
    <text x="210" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#b8d8d4"><title>panelTitle.activeForeground &#8212; #b8d8d4</title>ターミナル</text>
    <text x="270" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#1a3838">GITLENS</text>
    <rect x="210" y="203" width="56" height="1" fill="#01A88D"><title>panelTitle.activeBorder &#8212; #01A88D</title></rect>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#b8d8d4"><title>terminal.foreground &#8212; #b8d8d4</title>PS C:\experiment\vscode-theme&gt; vscode-theme set bedrock-teal</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#01A88D"><title>terminal.ansiGreen &#8212; #01A88D</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#b8d8d4">テーマをワークスペースに適用しました。</text>
    <text x="14" y="257" font-size="11" fill="#b8d8d4">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#01A88D"><title>terminalCursor.foreground &#8212; #01A88D</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#0d2b2b"><title>statusBar.background &#8212; #0d2b2b</title></rect>
    <rect y="274" width="640" height="1" fill="#01A88D" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#b8d8d4" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#b8d8d4" opacity="0.85">問題なし</text>
  </g>
</svg>
</div>

**テーマ名:** `bedrock-teal`  
**アクセント:** `#01A88D` &middot; **背景:** `#061616` &middot; **タイトルバー:** `#0d2b2b`

---

### D &mdash; Dark + ember red<!-- omit in toc -->


> 非常に暗い背景にエンバー（残り火）レッドのアクセント。他のウィンドウと見間違えようのない配色。


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Dark + ember red theme preview">
  <defs><clipPath id="cd-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#cd-clip)">
    <rect width="640" height="296" fill="#100c08"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#1e1410"><title>titleBar.activeBackground &#8212; #1e1410</title></rect>
    <rect y="26" width="640" height="2" fill="#E8441A"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#6a5040"><title>titleBar.inactiveForeground &#8212; #6a5040</title>vscode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#140e0a"><title>activityBar.background &#8212; #140e0a</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#E8441A"><title>activityBar.foreground &#8212; #E8441A</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#3a2818" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #3a2818</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#3a2818" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #3a2818</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#181008"><title>sideBar.background &#8212; #181008</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#241810"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#E8441A"><title>sideBarTitle.foreground &#8212; #E8441A</title>エクスプローラー</text>
    <rect x="36" y="56" width="159" height="18" fill="#E8441A" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #E8441A</title></rect>
    <text x="58" y="69" font-size="11" fill="#E8441A"><title>list.activeSelectionForeground &#8212; #E8441A</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#886655"><title>sideBar.foreground &#8212; #886655</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#886655"><title>sideBar.foreground &#8212; #886655</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#100c08"><title>editor.background &#8212; #100c08</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#181008"><title>editorGroupHeader.tabsBackground &#8212; #181008</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#241810"/>
    <rect x="196" y="28" width="98" height="22" fill="#100c08"><title>tab.activeBackground &#8212; #100c08</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#E8441A"><title>tab.activeBorderTop &#8212; #E8441A</title></rect>
    <text x="210" y="44" font-size="11" fill="#e8d8c8">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#6a5040"><title>tab.inactiveForeground &#8212; #6a5040</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#2a1e14"><title>editorLineNumber.foreground &#8212; #2a1e14</title>1</text>
    <text x="232" y="73" font-size="11" fill="#E8441A">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#e8d8c8">: {</text>
    <text x="216" y="92" font-size="11" fill="#2a1e14">2</text>
    <text x="246" y="92" font-size="11" fill="#E8441A">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#e8d8c8">:</text>
    <text x="424" y="92" font-size="11" fill="#E8441A"><title>textLink.foreground &#8212; #E8441A</title>&quot;#1e1410&quot;</text>
    <text x="216" y="111" font-size="11" fill="#2a1e14">3</text>
    <text x="232" y="111" font-size="11" fill="#e8d8c8">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#0c0804"><title>panel.background &#8212; #0c0804</title></rect>
    <rect y="203" width="640" height="1" fill="#241810"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#2a1e14"><title>panelTitle.inactiveForeground &#8212; #2a1e14</title>問題</text>
    <text x="50" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#2a1e14">出力</text>
    <text x="86" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#2a1e14">デバッグ コンソール</text>
    <text x="210" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#e8d8c8"><title>panelTitle.activeForeground &#8212; #e8d8c8</title>ターミナル</text>
    <text x="270" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#2a1e14">GITLENS</text>
    <rect x="210" y="203" width="56" height="1" fill="#E8441A"><title>panelTitle.activeBorder &#8212; #E8441A</title></rect>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#e8d8c8"><title>terminal.foreground &#8212; #e8d8c8</title>PS C:\experiment\vscode-theme&gt; vscode-theme set dark-ember</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#0DBC79"><title>terminal.ansiGreen &#8212; #0DBC79</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#e8d8c8">テーマをワークスペースに適用しました。</text>
    <text x="14" y="257" font-size="11" fill="#e8d8c8">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#E8441A"><title>terminalCursor.foreground &#8212; #E8441A</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#1e1410"><title>statusBar.background &#8212; #1e1410</title></rect>
    <rect y="274" width="640" height="1" fill="#E8441A" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#e8d8c8" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#e8d8c8" opacity="0.85">問題なし</text>
  </g>
</svg>
</div>

**テーマ名:** `dark-ember`  
**アクセント:** `#E8441A` &middot; **背景:** `#100c08` &middot; **タイトルバー:** `#1e1410`

---

### E &mdash; Forest green<!-- omit in toc -->


> 深い森林色の背景に、鮮やかなスプリンググリーンのアクセント。


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Forest green theme preview">
  <defs><clipPath id="ce-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#ce-clip)">
    <rect width="640" height="296" fill="#0a1a0f"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#14322a"><title>titleBar.activeBackground &#8212; #14322a</title></rect>
    <rect y="26" width="640" height="2" fill="#4ADE80"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#5a8070"><title>titleBar.inactiveForeground &#8212; #5a8070</title>vscode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#0d1f18"><title>activityBar.background &#8212; #0d1f18</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#4ADE80"><title>activityBar.foreground &#8212; #4ADE80</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#5a8070" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #5a8070</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#5a8070" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #5a8070</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#0c1d14"><title>sideBar.background &#8212; #0c1d14</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#1a3528"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#4ADE80"><title>sideBarTitle.foreground &#8212; #4ADE80</title>エクスプローラー</text>
    <rect x="36" y="56" width="159" height="18" fill="#4ADE80" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #4ADE80</title></rect>
    <text x="58" y="69" font-size="11" fill="#4ADE80"><title>list.activeSelectionForeground &#8212; #4ADE80</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#c8e8d0"><title>sideBar.foreground &#8212; #c8e8d0</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#c8e8d0"><title>sideBar.foreground &#8212; #c8e8d0</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#0a1a0f"><title>editor.background &#8212; #0a1a0f</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#0c1d14"><title>editorGroupHeader.tabsBackground &#8212; #0c1d14</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#1a3528"/>
    <rect x="196" y="28" width="98" height="22" fill="#0a1a0f"><title>tab.activeBackground &#8212; #0a1a0f</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#4ADE80"><title>tab.activeBorderTop &#8212; #4ADE80</title></rect>
    <text x="210" y="44" font-size="11" fill="#c8e8d0">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#8abba0"><title>tab.inactiveForeground &#8212; #8abba0</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#456b55"><title>editorLineNumber.foreground &#8212; #456b55</title>1</text>
    <text x="232" y="73" font-size="11" fill="#4ADE80">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#c8e8d0">: {</text>
    <text x="216" y="92" font-size="11" fill="#456b55">2</text>
    <text x="246" y="92" font-size="11" fill="#4ADE80">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#c8e8d0">:</text>
    <text x="424" y="92" font-size="11" fill="#4ADE80"><title>textLink.foreground &#8212; #4ADE80</title>&quot;#14322a&quot;</text>
    <text x="216" y="111" font-size="11" fill="#456b55">3</text>
    <text x="232" y="111" font-size="11" fill="#c8e8d0">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#08150c"><title>panel.background &#8212; #08150c</title></rect>
    <rect y="203" width="640" height="1" fill="#1a3528"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8abba0"><title>panelTitle.inactiveForeground &#8212; #8abba0</title>問題</text>
    <text x="50" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8abba0">出力</text>
    <text x="86" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8abba0">デバッグ コンソール</text>
    <text x="210" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#c8e8d0"><title>panelTitle.activeForeground &#8212; #c8e8d0</title>ターミナル</text>
    <text x="270" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8abba0">GITLENS</text>
    <rect x="210" y="203" width="56" height="1" fill="#4ADE80"><title>panelTitle.activeBorder &#8212; #4ADE80</title></rect>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#c8e8d0"><title>terminal.foreground &#8212; #c8e8d0</title>PS C:\experiment\vscode-theme&gt; vscode-theme set forest-green</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#4ADE80"><title>terminal.ansiGreen &#8212; #4ADE80</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#c8e8d0">テーマをワークスペースに適用しました。</text>
    <text x="14" y="257" font-size="11" fill="#c8e8d0">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#4ADE80"><title>terminalCursor.foreground &#8212; #4ADE80</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#14322a"><title>statusBar.background &#8212; #14322a</title></rect>
    <rect y="274" width="640" height="1" fill="#4ADE80" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#c8e8d0" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#c8e8d0" opacity="0.85">問題なし</text>
  </g>
</svg>
</div>

**テーマ名:** `forest-green`  
**アクセント:** `#4ADE80` &middot; **背景:** `#0a1a0f` &middot; **タイトルバー:** `#14322a`

---

### F &mdash; Royal purple<!-- omit in toc -->


> ダークプラム（濃い紫）の背景に、深いバイオレットのアクセント。


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Royal purple theme preview">
  <defs><clipPath id="cf-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#cf-clip)">
    <rect width="640" height="296" fill="#120a1f"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#2a1a4a"><title>titleBar.activeBackground &#8212; #2a1a4a</title></rect>
    <rect y="26" width="640" height="2" fill="#A855F7"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#7a5fa0"><title>titleBar.inactiveForeground &#8212; #7a5fa0</title>vscode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#1a1033"><title>activityBar.background &#8212; #1a1033</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#A855F7"><title>activityBar.foreground &#8212; #A855F7</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#7a5fa0" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #7a5fa0</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#7a5fa0" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #7a5fa0</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#160d2b"><title>sideBar.background &#8212; #160d2b</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#2a1a4a"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#A855F7"><title>sideBarTitle.foreground &#8212; #A855F7</title>エクスプローラー</text>
    <rect x="36" y="56" width="159" height="18" fill="#A855F7" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #A855F7</title></rect>
    <text x="58" y="69" font-size="11" fill="#A855F7"><title>list.activeSelectionForeground &#8212; #A855F7</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#e0d0f5"><title>sideBar.foreground &#8212; #e0d0f5</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#e0d0f5"><title>sideBar.foreground &#8212; #e0d0f5</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#120a1f"><title>editor.background &#8212; #120a1f</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#160d2b"><title>editorGroupHeader.tabsBackground &#8212; #160d2b</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#2a1a4a"/>
    <rect x="196" y="28" width="98" height="22" fill="#120a1f"><title>tab.activeBackground &#8212; #120a1f</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#A855F7"><title>tab.activeBorderTop &#8212; #A855F7</title></rect>
    <text x="210" y="44" font-size="11" fill="#e0d0f5">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#a898c8"><title>tab.inactiveForeground &#8212; #a898c8</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#5a4580"><title>editorLineNumber.foreground &#8212; #5a4580</title>1</text>
    <text x="232" y="73" font-size="11" fill="#A855F7">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#e0d0f5">: {</text>
    <text x="216" y="92" font-size="11" fill="#5a4580">2</text>
    <text x="246" y="92" font-size="11" fill="#A855F7">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#e0d0f5">:</text>
    <text x="424" y="92" font-size="11" fill="#A855F7"><title>textLink.foreground &#8212; #A855F7</title>&quot;#2a1a4a&quot;</text>
    <text x="216" y="111" font-size="11" fill="#5a4580">3</text>
    <text x="232" y="111" font-size="11" fill="#e0d0f5">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#0e0818"><title>panel.background &#8212; #0e0818</title></rect>
    <rect y="203" width="640" height="1" fill="#2a1a4a"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a898c8"><title>panelTitle.inactiveForeground &#8212; #a898c8</title>問題</text>
    <text x="50" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a898c8">出力</text>
    <text x="86" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a898c8">デバッグ コンソール</text>
    <text x="210" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#e0d0f5"><title>panelTitle.activeForeground &#8212; #e0d0f5</title>ターミナル</text>
    <text x="270" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a898c8">GITLENS</text>
    <rect x="210" y="203" width="56" height="1" fill="#A855F7"><title>panelTitle.activeBorder &#8212; #A855F7</title></rect>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#e0d0f5"><title>terminal.foreground &#8212; #e0d0f5</title>PS C:\experiment\vscode-theme&gt; vscode-theme set royal-purple</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#86EFAC"><title>terminal.ansiGreen &#8212; #86EFAC</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#e0d0f5">テーマをワークスペースに適用しました。</text>
    <text x="14" y="257" font-size="11" fill="#e0d0f5">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#A855F7"><title>terminalCursor.foreground &#8212; #A855F7</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#2a1a4a"><title>statusBar.background &#8212; #2a1a4a</title></rect>
    <rect y="274" width="640" height="1" fill="#A855F7" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#e0d0f5" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#e0d0f5" opacity="0.85">問題なし</text>
  </g>
</svg>
</div>

**テーマ名:** `royal-purple`  
**アクセント:** `#A855F7` &middot; **背景:** `#120a1f` &middot; **タイトルバー:** `#2a1a4a`

---

### G &mdash; Ocean blue<!-- omit in toc -->


> 深海色の背景に、明るいスカイシアンのアクセント。


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Ocean blue theme preview">
  <defs><clipPath id="cg-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#cg-clip)">
    <rect width="640" height="296" fill="#061624"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#0e2a44"><title>titleBar.activeBackground &#8212; #0e2a44</title></rect>
    <rect y="26" width="640" height="2" fill="#38BDF8"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#5a8098"><title>titleBar.inactiveForeground &#8212; #5a8098</title>vscode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#091c2e"><title>activityBar.background &#8212; #091c2e</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#38BDF8"><title>activityBar.foreground &#8212; #38BDF8</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#5a8098" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #5a8098</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#5a8098" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #5a8098</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#081e32"><title>sideBar.background &#8212; #081e32</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#14334a"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#38BDF8"><title>sideBarTitle.foreground &#8212; #38BDF8</title>エクスプローラー</text>
    <rect x="36" y="56" width="159" height="18" fill="#38BDF8" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #38BDF8</title></rect>
    <text x="58" y="69" font-size="11" fill="#38BDF8"><title>list.activeSelectionForeground &#8212; #38BDF8</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#c8e0f5"><title>sideBar.foreground &#8212; #c8e0f5</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#c8e0f5"><title>sideBar.foreground &#8212; #c8e0f5</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#061624"><title>editor.background &#8212; #061624</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#081e32"><title>editorGroupHeader.tabsBackground &#8212; #081e32</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#14334a"/>
    <rect x="196" y="28" width="98" height="22" fill="#061624"><title>tab.activeBackground &#8212; #061624</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#38BDF8"><title>tab.activeBorderTop &#8212; #38BDF8</title></rect>
    <text x="210" y="44" font-size="11" fill="#c8e0f5">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#8ab4c8"><title>tab.inactiveForeground &#8212; #8ab4c8</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#456880"><title>editorLineNumber.foreground &#8212; #456880</title>1</text>
    <text x="232" y="73" font-size="11" fill="#38BDF8">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#c8e0f5">: {</text>
    <text x="216" y="92" font-size="11" fill="#456880">2</text>
    <text x="246" y="92" font-size="11" fill="#38BDF8">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#c8e0f5">:</text>
    <text x="424" y="92" font-size="11" fill="#38BDF8"><title>textLink.foreground &#8212; #38BDF8</title>&quot;#0e2a44&quot;</text>
    <text x="216" y="111" font-size="11" fill="#456880">3</text>
    <text x="232" y="111" font-size="11" fill="#c8e0f5">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#04101c"><title>panel.background &#8212; #04101c</title></rect>
    <rect y="203" width="640" height="1" fill="#14334a"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8ab4c8"><title>panelTitle.inactiveForeground &#8212; #8ab4c8</title>問題</text>
    <text x="50" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8ab4c8">出力</text>
    <text x="86" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8ab4c8">デバッグ コンソール</text>
    <text x="210" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#c8e0f5"><title>panelTitle.activeForeground &#8212; #c8e0f5</title>ターミナル</text>
    <text x="270" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8ab4c8">GITLENS</text>
    <rect x="210" y="203" width="56" height="1" fill="#38BDF8"><title>panelTitle.activeBorder &#8212; #38BDF8</title></rect>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#c8e0f5"><title>terminal.foreground &#8212; #c8e0f5</title>PS C:\experiment\vscode-theme&gt; vscode-theme set ocean-blue</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#5eead4"><title>terminal.ansiGreen &#8212; #5eead4</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#c8e0f5">テーマをワークスペースに適用しました。</text>
    <text x="14" y="257" font-size="11" fill="#c8e0f5">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#38BDF8"><title>terminalCursor.foreground &#8212; #38BDF8</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#0e2a44"><title>statusBar.background &#8212; #0e2a44</title></rect>
    <rect y="274" width="640" height="1" fill="#38BDF8" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#c8e0f5" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#c8e0f5" opacity="0.85">問題なし</text>
  </g>
</svg>
</div>

**テーマ名:** `ocean-blue`  
**アクセント:** `#38BDF8` &middot; **背景:** `#061624` &middot; **タイトルバー:** `#0e2a44`

---

### H &mdash; Rose magenta<!-- omit in toc -->


> ダークワイン色の背景に、ホットピンク寄りのマゼンタのアクセント。


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Rose magenta theme preview">
  <defs><clipPath id="ch-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#ch-clip)">
    <rect width="640" height="296" fill="#1a0a14"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#3a0f28"><title>titleBar.activeBackground &#8212; #3a0f28</title></rect>
    <rect y="26" width="640" height="2" fill="#EC4899"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#985a78"><title>titleBar.inactiveForeground &#8212; #985a78</title>vscode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#25091a"><title>activityBar.background &#8212; #25091a</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#EC4899"><title>activityBar.foreground &#8212; #EC4899</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#985a78" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #985a78</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#985a78" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #985a78</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#22091a"><title>sideBar.background &#8212; #22091a</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#3a0f28"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#EC4899"><title>sideBarTitle.foreground &#8212; #EC4899</title>エクスプローラー</text>
    <rect x="36" y="56" width="159" height="18" fill="#EC4899" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #EC4899</title></rect>
    <text x="58" y="69" font-size="11" fill="#EC4899"><title>list.activeSelectionForeground &#8212; #EC4899</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#f5d0e0"><title>sideBar.foreground &#8212; #f5d0e0</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#f5d0e0"><title>sideBar.foreground &#8212; #f5d0e0</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#1a0a14"><title>editor.background &#8212; #1a0a14</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#22091a"><title>editorGroupHeader.tabsBackground &#8212; #22091a</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#3a0f28"/>
    <rect x="196" y="28" width="98" height="22" fill="#1a0a14"><title>tab.activeBackground &#8212; #1a0a14</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#EC4899"><title>tab.activeBorderTop &#8212; #EC4899</title></rect>
    <text x="210" y="44" font-size="11" fill="#f5d0e0">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#c898b0"><title>tab.inactiveForeground &#8212; #c898b0</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#70355a"><title>editorLineNumber.foreground &#8212; #70355a</title>1</text>
    <text x="232" y="73" font-size="11" fill="#EC4899">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#f5d0e0">: {</text>
    <text x="216" y="92" font-size="11" fill="#70355a">2</text>
    <text x="246" y="92" font-size="11" fill="#EC4899">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#f5d0e0">:</text>
    <text x="424" y="92" font-size="11" fill="#EC4899"><title>textLink.foreground &#8212; #EC4899</title>&quot;#3a0f28&quot;</text>
    <text x="216" y="111" font-size="11" fill="#70355a">3</text>
    <text x="232" y="111" font-size="11" fill="#f5d0e0">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#14070f"><title>panel.background &#8212; #14070f</title></rect>
    <rect y="203" width="640" height="1" fill="#3a0f28"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#c898b0"><title>panelTitle.inactiveForeground &#8212; #c898b0</title>問題</text>
    <text x="50" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#c898b0">出力</text>
    <text x="86" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#c898b0">デバッグ コンソール</text>
    <text x="210" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#f5d0e0"><title>panelTitle.activeForeground &#8212; #f5d0e0</title>ターミナル</text>
    <text x="270" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#c898b0">GITLENS</text>
    <rect x="210" y="203" width="56" height="1" fill="#EC4899"><title>panelTitle.activeBorder &#8212; #EC4899</title></rect>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#f5d0e0"><title>terminal.foreground &#8212; #f5d0e0</title>PS C:\experiment\vscode-theme&gt; vscode-theme set rose-magenta</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#86EFAC"><title>terminal.ansiGreen &#8212; #86EFAC</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#f5d0e0">テーマをワークスペースに適用しました。</text>
    <text x="14" y="257" font-size="11" fill="#f5d0e0">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#EC4899"><title>terminalCursor.foreground &#8212; #EC4899</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#3a0f28"><title>statusBar.background &#8212; #3a0f28</title></rect>
    <rect y="274" width="640" height="1" fill="#EC4899" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#f5d0e0" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#f5d0e0" opacity="0.85">問題なし</text>
  </g>
</svg>
</div>

**テーマ名:** `rose-magenta`  
**アクセント:** `#EC4899` &middot; **背景:** `#1a0a14` &middot; **タイトルバー:** `#3a0f28`

---

### I &mdash; Paper light<!-- omit in toc -->


> 温かみのあるクリーム色の紙の背景に、セピアブラウンのアクセント。昼間のコーディング向けのライトテーマ。


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Paper light theme preview">
  <defs><clipPath id="ci-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#ci-clip)">
    <rect width="640" height="296" fill="#FAF6EE"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#E8DFCC"><title>titleBar.activeBackground &#8212; #E8DFCC</title></rect>
    <rect y="26" width="640" height="2" fill="#A0522D"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#8a7560"><title>titleBar.inactiveForeground &#8212; #8a7560</title>vscode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#F0EADC"><title>activityBar.background &#8212; #F0EADC</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#A0522D"><title>activityBar.foreground &#8212; #A0522D</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#8a7560" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #8a7560</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#8a7560" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #8a7560</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#F5F0E2"><title>sideBar.background &#8212; #F5F0E2</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#D8CFB8"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#A0522D"><title>sideBarTitle.foreground &#8212; #A0522D</title>エクスプローラー</text>
    <rect x="36" y="56" width="159" height="18" fill="#A0522D" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #A0522D</title></rect>
    <text x="58" y="69" font-size="11" fill="#A0522D"><title>list.activeSelectionForeground &#8212; #A0522D</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#3a2818"><title>sideBar.foreground &#8212; #3a2818</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#3a2818"><title>sideBar.foreground &#8212; #3a2818</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#FAF6EE"><title>editor.background &#8212; #FAF6EE</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#ECE4D0"><title>editorGroupHeader.tabsBackground &#8212; #ECE4D0</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#D8CFB8"/>
    <rect x="196" y="28" width="98" height="22" fill="#FAF6EE"><title>tab.activeBackground &#8212; #FAF6EE</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#A0522D"><title>tab.activeBorderTop &#8212; #A0522D</title></rect>
    <text x="210" y="44" font-size="11" fill="#3a2818">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#6a5240"><title>tab.inactiveForeground &#8212; #6a5240</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#a89a7a"><title>editorLineNumber.foreground &#8212; #a89a7a</title>1</text>
    <text x="232" y="73" font-size="11" fill="#A0522D">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#3a2818">: {</text>
    <text x="216" y="92" font-size="11" fill="#a89a7a">2</text>
    <text x="246" y="92" font-size="11" fill="#A0522D">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#3a2818">:</text>
    <text x="424" y="92" font-size="11" fill="#A0522D"><title>textLink.foreground &#8212; #A0522D</title>&quot;#E8DFCC&quot;</text>
    <text x="216" y="111" font-size="11" fill="#a89a7a">3</text>
    <text x="232" y="111" font-size="11" fill="#3a2818">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#F5F0E2"><title>panel.background &#8212; #F5F0E2</title></rect>
    <rect y="203" width="640" height="1" fill="#D8CFB8"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8a7560"><title>panelTitle.inactiveForeground &#8212; #8a7560</title>問題</text>
    <text x="50" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8a7560">出力</text>
    <text x="86" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8a7560">デバッグ コンソール</text>
    <text x="210" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#3a2818"><title>panelTitle.activeForeground &#8212; #3a2818</title>ターミナル</text>
    <text x="270" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8a7560">GITLENS</text>
    <rect x="210" y="203" width="56" height="1" fill="#A0522D"><title>panelTitle.activeBorder &#8212; #A0522D</title></rect>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#3a2818"><title>terminal.foreground &#8212; #3a2818</title>PS C:\experiment\vscode-theme&gt; vscode-theme set paper-light</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#3D6B2E"><title>terminal.ansiGreen &#8212; #3D6B2E</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#3a2818">テーマをワークスペースに適用しました。</text>
    <text x="14" y="257" font-size="11" fill="#3a2818">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#A0522D"><title>terminalCursor.foreground &#8212; #A0522D</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#E8DFCC"><title>statusBar.background &#8212; #E8DFCC</title></rect>
    <rect y="274" width="640" height="1" fill="#A0522D" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#3a2818" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#3a2818" opacity="0.85">問題なし</text>
  </g>
</svg>
</div>

**テーマ名:** `paper-light`  
**アクセント:** `#A0522D` &middot; **背景:** `#FAF6EE` &middot; **タイトルバー:** `#E8DFCC`

---

### J &mdash; Arctic light<!-- omit in toc -->


> 冷たいフロストホワイトの背景に、シャープなスチールブルーのアクセント。コントラスト控えめのライトテーマ。


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Arctic light theme preview">
  <defs><clipPath id="cj-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#cj-clip)">
    <rect width="640" height="296" fill="#F4F8FC"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#DCE6F2"><title>titleBar.activeBackground &#8212; #DCE6F2</title></rect>
    <rect y="26" width="640" height="2" fill="#2563EB"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#6080a5"><title>titleBar.inactiveForeground &#8212; #6080a5</title>vscode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#E8EEF7"><title>activityBar.background &#8212; #E8EEF7</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#2563EB"><title>activityBar.foreground &#8212; #2563EB</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#6080a5" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #6080a5</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#6080a5" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #6080a5</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#EEF3FA"><title>sideBar.background &#8212; #EEF3FA</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#CCD8EA"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#2563EB"><title>sideBarTitle.foreground &#8212; #2563EB</title>エクスプローラー</text>
    <rect x="36" y="56" width="159" height="18" fill="#2563EB" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #2563EB</title></rect>
    <text x="58" y="69" font-size="11" fill="#2563EB"><title>list.activeSelectionForeground &#8212; #2563EB</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#1e3a5f"><title>sideBar.foreground &#8212; #1e3a5f</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#1e3a5f"><title>sideBar.foreground &#8212; #1e3a5f</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#F4F8FC"><title>editor.background &#8212; #F4F8FC</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#E0E8F4"><title>editorGroupHeader.tabsBackground &#8212; #E0E8F4</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#CCD8EA"/>
    <rect x="196" y="28" width="98" height="22" fill="#F4F8FC"><title>tab.activeBackground &#8212; #F4F8FC</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#2563EB"><title>tab.activeBorderTop &#8212; #2563EB</title></rect>
    <text x="210" y="44" font-size="11" fill="#1e3a5f">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#4a6580"><title>tab.inactiveForeground &#8212; #4a6580</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#98b0c8"><title>editorLineNumber.foreground &#8212; #98b0c8</title>1</text>
    <text x="232" y="73" font-size="11" fill="#2563EB">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#1e3a5f">: {</text>
    <text x="216" y="92" font-size="11" fill="#98b0c8">2</text>
    <text x="246" y="92" font-size="11" fill="#2563EB">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#1e3a5f">:</text>
    <text x="424" y="92" font-size="11" fill="#2563EB"><title>textLink.foreground &#8212; #2563EB</title>&quot;#DCE6F2&quot;</text>
    <text x="216" y="111" font-size="11" fill="#98b0c8">3</text>
    <text x="232" y="111" font-size="11" fill="#1e3a5f">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#EEF3FA"><title>panel.background &#8212; #EEF3FA</title></rect>
    <rect y="203" width="640" height="1" fill="#CCD8EA"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#6080a5"><title>panelTitle.inactiveForeground &#8212; #6080a5</title>問題</text>
    <text x="50" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#6080a5">出力</text>
    <text x="86" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#6080a5">デバッグ コンソール</text>
    <text x="210" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#1e3a5f"><title>panelTitle.activeForeground &#8212; #1e3a5f</title>ターミナル</text>
    <text x="270" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#6080a5">GITLENS</text>
    <rect x="210" y="203" width="56" height="1" fill="#2563EB"><title>panelTitle.activeBorder &#8212; #2563EB</title></rect>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#1e3a5f"><title>terminal.foreground &#8212; #1e3a5f</title>PS C:\experiment\vscode-theme&gt; vscode-theme set arctic-light</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#16A34A"><title>terminal.ansiGreen &#8212; #16A34A</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#1e3a5f">テーマをワークスペースに適用しました。</text>
    <text x="14" y="257" font-size="11" fill="#1e3a5f">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#2563EB"><title>terminalCursor.foreground &#8212; #2563EB</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#DCE6F2"><title>statusBar.background &#8212; #DCE6F2</title></rect>
    <rect y="274" width="640" height="1" fill="#2563EB" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#1e3a5f" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#1e3a5f" opacity="0.85">問題なし</text>
  </g>
</svg>
</div>

**テーマ名:** `arctic-light`  
**アクセント:** `#2563EB` &middot; **背景:** `#F4F8FC` &middot; **タイトルバー:** `#DCE6F2`

---

### K &mdash; Frappé teal<!-- omit in toc -->


> Catppuccin Frappé にインスパイアされたダークテーマ。鮮やかなティールアクセント。`dawn-teal` とペアで使うことを想定したダーク／ライトセット。


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Frappé teal theme preview">
  <defs><clipPath id="ck-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#ck-clip)">
    <rect width="640" height="296" fill="#303446"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#292c3c"><title>titleBar.activeBackground &#8212; #292c3c</title></rect>
    <rect y="26" width="640" height="2" fill="#11B7C5"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#a5adce"><title>titleBar.inactiveForeground &#8212; #a5adce</title>vscode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#292c3c"><title>activityBar.background &#8212; #292c3c</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#11B7C5"><title>activityBar.foreground &#8212; #11B7C5</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#737994" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #737994</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#737994" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #737994</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#292c3c"><title>sideBar.background &#8212; #292c3c</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#414559"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#11B7C5"><title>sideBarTitle.foreground &#8212; #11B7C5</title>エクスプローラー</text>
    <rect x="36" y="56" width="159" height="18" fill="#11B7C5" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #11B7C5</title></rect>
    <text x="58" y="69" font-size="11" fill="#11B7C5"><title>list.activeSelectionForeground &#8212; #11B7C5</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#c6d0f5"><title>sideBar.foreground &#8212; #c6d0f5</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#c6d0f5"><title>sideBar.foreground &#8212; #c6d0f5</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#303446"><title>editor.background &#8212; #303446</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#292c3c"><title>editorGroupHeader.tabsBackground &#8212; #292c3c</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#414559"/>
    <rect x="196" y="28" width="98" height="22" fill="#303446"><title>tab.activeBackground &#8212; #303446</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#11B7C5"><title>tab.activeBorderTop &#8212; #11B7C5</title></rect>
    <text x="210" y="44" font-size="11" fill="#c6d0f5">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#a5adce"><title>tab.inactiveForeground &#8212; #a5adce</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#626880"><title>editorLineNumber.foreground &#8212; #626880</title>1</text>
    <text x="232" y="73" font-size="11" fill="#11B7C5">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#c6d0f5">: {</text>
    <text x="216" y="92" font-size="11" fill="#626880">2</text>
    <text x="246" y="92" font-size="11" fill="#11B7C5">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#c6d0f5">:</text>
    <text x="424" y="92" font-size="11" fill="#11B7C5"><title>textLink.foreground &#8212; #11B7C5</title>&quot;#292c3c&quot;</text>
    <text x="216" y="111" font-size="11" fill="#626880">3</text>
    <text x="232" y="111" font-size="11" fill="#c6d0f5">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#232634"><title>panel.background &#8212; #232634</title></rect>
    <rect y="203" width="640" height="1" fill="#414559"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a5adce"><title>panelTitle.inactiveForeground &#8212; #a5adce</title>問題</text>
    <text x="50" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a5adce">出力</text>
    <text x="86" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a5adce">デバッグ コンソール</text>
    <text x="210" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#c6d0f5"><title>panelTitle.activeForeground &#8212; #c6d0f5</title>ターミナル</text>
    <text x="270" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a5adce">GITLENS</text>
    <rect x="210" y="203" width="56" height="1" fill="#11B7C5"><title>panelTitle.activeBorder &#8212; #11B7C5</title></rect>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#c6d0f5"><title>terminal.foreground &#8212; #c6d0f5</title>PS C:\experiment\vscode-theme&gt; vscode-theme set frappe-teal</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#a6d189"><title>terminal.ansiGreen &#8212; #a6d189</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#c6d0f5">テーマをワークスペースに適用しました。</text>
    <text x="14" y="257" font-size="11" fill="#c6d0f5">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#11B7C5"><title>terminalCursor.foreground &#8212; #11B7C5</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#292c3c"><title>statusBar.background &#8212; #292c3c</title></rect>
    <rect y="274" width="640" height="1" fill="#11B7C5" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#c6d0f5" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#c6d0f5" opacity="0.85">問題なし</text>
  </g>
</svg>
</div>

**テーマ名:** `frappe-teal`  
**アクセント:** `#11B7C5` &middot; **背景:** `#303446` &middot; **タイトルバー:** `#292c3c`

---

### L &mdash; Dawn teal<!-- omit in toc -->


> Rosé Pine Dawn にインスパイアされたライトテーマ。明るいクリーム色の背景に深いティールのアクセント。`frappe-teal` のライト版カウンターパート。


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="Dawn teal theme preview">
  <defs><clipPath id="cl-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#cl-clip)">
    <rect width="640" height="296" fill="#faf4ed"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#f2e9e1"><title>titleBar.activeBackground &#8212; #f2e9e1</title></rect>
    <rect y="26" width="640" height="2" fill="#1A7DA4"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#797593"><title>titleBar.inactiveForeground &#8212; #797593</title>vscode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#fffaf3"><title>activityBar.background &#8212; #fffaf3</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#1A7DA4"><title>activityBar.foreground &#8212; #1A7DA4</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#9893a5" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #9893a5</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#9893a5" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #9893a5</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#fffaf3"><title>sideBar.background &#8212; #fffaf3</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#e8dfd3"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#1A7DA4"><title>sideBarTitle.foreground &#8212; #1A7DA4</title>エクスプローラー</text>
    <rect x="36" y="56" width="159" height="18" fill="#1A7DA4" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #1A7DA4</title></rect>
    <text x="58" y="69" font-size="11" fill="#1A7DA4"><title>list.activeSelectionForeground &#8212; #1A7DA4</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#575279"><title>sideBar.foreground &#8212; #575279</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#575279"><title>sideBar.foreground &#8212; #575279</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#faf4ed"><title>editor.background &#8212; #faf4ed</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#f2e9e1"><title>editorGroupHeader.tabsBackground &#8212; #f2e9e1</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#e8dfd3"/>
    <rect x="196" y="28" width="98" height="22" fill="#faf4ed"><title>tab.activeBackground &#8212; #faf4ed</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#1A7DA4"><title>tab.activeBorderTop &#8212; #1A7DA4</title></rect>
    <text x="210" y="44" font-size="11" fill="#575279">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#797593"><title>tab.inactiveForeground &#8212; #797593</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#c7bfb1"><title>editorLineNumber.foreground &#8212; #c7bfb1</title>1</text>
    <text x="232" y="73" font-size="11" fill="#1A7DA4">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#575279">: {</text>
    <text x="216" y="92" font-size="11" fill="#c7bfb1">2</text>
    <text x="246" y="92" font-size="11" fill="#1A7DA4">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#575279">:</text>
    <text x="424" y="92" font-size="11" fill="#1A7DA4"><title>textLink.foreground &#8212; #1A7DA4</title>&quot;#f2e9e1&quot;</text>
    <text x="216" y="111" font-size="11" fill="#c7bfb1">3</text>
    <text x="232" y="111" font-size="11" fill="#575279">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#fffaf3"><title>panel.background &#8212; #fffaf3</title></rect>
    <rect y="203" width="640" height="1" fill="#e8dfd3"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#797593"><title>panelTitle.inactiveForeground &#8212; #797593</title>問題</text>
    <text x="50" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#797593">出力</text>
    <text x="86" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#797593">デバッグ コンソール</text>
    <text x="210" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#575279"><title>panelTitle.activeForeground &#8212; #575279</title>ターミナル</text>
    <text x="270" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#797593">GITLENS</text>
    <rect x="210" y="203" width="56" height="1" fill="#1A7DA4"><title>panelTitle.activeBorder &#8212; #1A7DA4</title></rect>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#575279"><title>terminal.foreground &#8212; #575279</title>PS C:\experiment\vscode-theme&gt; vscode-theme set dawn-teal</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#618774"><title>terminal.ansiGreen &#8212; #618774</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#575279">テーマをワークスペースに適用しました。</text>
    <text x="14" y="257" font-size="11" fill="#575279">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#1A7DA4"><title>terminalCursor.foreground &#8212; #1A7DA4</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#f2e9e1"><title>statusBar.background &#8212; #f2e9e1</title></rect>
    <rect y="274" width="640" height="1" fill="#1A7DA4" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#575279" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#575279" opacity="0.85">問題なし</text>
  </g>
</svg>
</div>

**テーマ名:** `dawn-teal`  
**アクセント:** `#1A7DA4` &middot; **背景:** `#faf4ed` &middot; **タイトルバー:** `#f2e9e1`

---

## ワークスペースの識別マーカーとしてのテーマ活用

各テーマはタイトルバー・アクティビティバー・ステータスバーを強いアクセント色で塗るため、複数の VSCode ウィンドウを並べたときの「**視覚的な環境タグ**」として使えます。今見ているのが本番・ステージング・作業用スクラッチパッドのどれなのか、一目で分かるようになります。既定値はグローバルに適用し、プロジェクトフォルダ内で `vscode-theme set <name>` を実行すればワークスペース単位で上書きできます。

用途のマッピング例：

| 用途                             | テーマ                               | 理由                                                                                     |
| -------------------------------- | ------------------------------------ | ---------------------------------------------------------------------------------------- |
| **本番 / 危険ゾーン**            | `dark-ember`                         | エンバーレッドは「ここでは慎重に」という感覚。                                           |
| **ステージング / pre-prod**      | `squidink-yellow`                    | ゴールド＝注意、ただし停止ではない。                                                     |
| **開発**                         | `forest-green` または `bedrock-teal` | グリーン＝安全、進んで OK。                                                              |
| **個人 / サイドプロジェクト**    | `royal-purple` または `rose-magenta` | 仕事のウィンドウと明確に区別。                                                           |
| **クラウド / インフラ作業**      | `navy-orange` または `ocean-blue`    | 長時間のインフラ作業に適したクール系トーン。                                             |
| **ドキュメント / 執筆 / 昼光下** | `paper-light` または `arctic-light`  | 読む作業が多いときや明るい部屋ではライトテーマを。                                       |
| **連動するダーク／ライトペア**   | `frappe-teal` + `dawn-teal`          | ティールのアクセントを共有。周囲の明るさで切り替えても視覚的アイデンティティは保たれる。 |
| **長時間作業 / 目に優しい**      | `sage-paper` + `sage-paper-dark`     | ブルーライトを抑えた暖色パレットで長時間のセッション向け。時間帯で切り替える運用に。     |

これはあくまで慣例です。色と意味の対応付けは自分にとって自然なものを選んでください。ツール側で強制しているわけではありません。

---

### M &mdash; レザーオレンジ<!-- omit in toc -->


> サドルレザーのようなブラウンに、深いバーントオレンジのアクセント。


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="レザーオレンジ theme preview">
  <defs><clipPath id="cm-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#cm-clip)">
    <rect width="640" height="296" fill="#1a0f05"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#2d1b0a"><title>titleBar.activeBackground &#8212; #2d1b0a</title></rect>
    <rect y="26" width="640" height="2" fill="#F67B00"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#6b5540"><title>titleBar.inactiveForeground &#8212; #6b5540</title>vscode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#1e130a"><title>activityBar.background &#8212; #1e130a</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#F67B00"><title>activityBar.foreground &#8212; #F67B00</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#6b5540" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #6b5540</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#6b5540" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #6b5540</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#24180c"><title>sideBar.background &#8212; #24180c</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#3d2814"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#F67B00"><title>sideBarTitle.foreground &#8212; #F67B00</title>エクスプローラー</text>
    <rect x="36" y="56" width="159" height="18" fill="#F67B00" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #F67B00</title></rect>
    <text x="58" y="69" font-size="11" fill="#F67B00"><title>list.activeSelectionForeground &#8212; #F67B00</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#f5e6d0"><title>sideBar.foreground &#8212; #f5e6d0</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#f5e6d0"><title>sideBar.foreground &#8212; #f5e6d0</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#1a0f05"><title>editor.background &#8212; #1a0f05</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#24180c"><title>editorGroupHeader.tabsBackground &#8212; #24180c</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#3d2814"/>
    <rect x="196" y="28" width="98" height="22" fill="#1a0f05"><title>tab.activeBackground &#8212; #1a0f05</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#F67B00"><title>tab.activeBorderTop &#8212; #F67B00</title></rect>
    <text x="210" y="44" font-size="11" fill="#f5e6d0">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#b8997a"><title>tab.inactiveForeground &#8212; #b8997a</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#755a3a"><title>editorLineNumber.foreground &#8212; #755a3a</title>1</text>
    <text x="232" y="73" font-size="11" fill="#F67B00">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#f5e6d0">: {</text>
    <text x="216" y="92" font-size="11" fill="#755a3a">2</text>
    <text x="246" y="92" font-size="11" fill="#F67B00">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#f5e6d0">:</text>
    <text x="424" y="92" font-size="11" fill="#F67B00"><title>textLink.foreground &#8212; #F67B00</title>&quot;#2d1b0a&quot;</text>
    <text x="216" y="111" font-size="11" fill="#755a3a">3</text>
    <text x="232" y="111" font-size="11" fill="#f5e6d0">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#0f0803"><title>panel.background &#8212; #0f0803</title></rect>
    <rect y="203" width="640" height="1" fill="#3d2814"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#b8997a"><title>panelTitle.inactiveForeground &#8212; #b8997a</title>問題</text>
    <text x="50" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#b8997a">出力</text>
    <text x="86" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#b8997a">デバッグ コンソール</text>
    <text x="210" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#f5e6d0"><title>panelTitle.activeForeground &#8212; #f5e6d0</title>ターミナル</text>
    <text x="270" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#b8997a">GITLENS</text>
    <rect x="210" y="203" width="56" height="1" fill="#F67B00"><title>panelTitle.activeBorder &#8212; #F67B00</title></rect>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#f5e6d0"><title>terminal.foreground &#8212; #f5e6d0</title>PS C:\experiment\vscode-theme&gt; vscode-theme set leather-orange</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#94C973"><title>terminal.ansiGreen &#8212; #94C973</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#f5e6d0">テーマをワークスペースに適用しました。</text>
    <text x="14" y="257" font-size="11" fill="#f5e6d0">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#F67B00"><title>terminalCursor.foreground &#8212; #F67B00</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#2d1b0a"><title>statusBar.background &#8212; #2d1b0a</title></rect>
    <rect y="274" width="640" height="1" fill="#F67B00" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#f5e6d0" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#f5e6d0" opacity="0.85">問題なし</text>
  </g>
</svg>
</div>

**テーマ名:** `leather-orange`
**アクセント:** `#F67B00` &middot; **背景:** `#1a0f05` &middot; **タイトルバー:** `#2d1b0a`

---

### N &mdash; ココアゴールド<!-- omit in toc -->


> 温かみのあるココアブラウン地に、アンティークゴールドのアクセント。


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="ココアゴールド theme preview">
  <defs><clipPath id="cn-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#cn-clip)">
    <rect width="640" height="296" fill="#1a120a"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#2d1f14"><title>titleBar.activeBackground &#8212; #2d1f14</title></rect>
    <rect y="26" width="640" height="2" fill="#C5A260"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#7a6548"><title>titleBar.inactiveForeground &#8212; #7a6548</title>vscode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#20160d"><title>activityBar.background &#8212; #20160d</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#C5A260"><title>activityBar.foreground &#8212; #C5A260</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#7a6548" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #7a6548</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#7a6548" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #7a6548</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#261a0f"><title>sideBar.background &#8212; #261a0f</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#3d2c1c"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#C5A260"><title>sideBarTitle.foreground &#8212; #C5A260</title>エクスプローラー</text>
    <rect x="36" y="56" width="159" height="18" fill="#C5A260" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #C5A260</title></rect>
    <text x="58" y="69" font-size="11" fill="#C5A260"><title>list.activeSelectionForeground &#8212; #C5A260</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#e8d9bc"><title>sideBar.foreground &#8212; #e8d9bc</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#e8d9bc"><title>sideBar.foreground &#8212; #e8d9bc</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#1a120a"><title>editor.background &#8212; #1a120a</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#261a0f"><title>editorGroupHeader.tabsBackground &#8212; #261a0f</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#3d2c1c"/>
    <rect x="196" y="28" width="98" height="22" fill="#1a120a"><title>tab.activeBackground &#8212; #1a120a</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#C5A260"><title>tab.activeBorderTop &#8212; #C5A260</title></rect>
    <text x="210" y="44" font-size="11" fill="#e8d9bc">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#a89074"><title>tab.inactiveForeground &#8212; #a89074</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#746038"><title>editorLineNumber.foreground &#8212; #746038</title>1</text>
    <text x="232" y="73" font-size="11" fill="#C5A260">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#e8d9bc">: {</text>
    <text x="216" y="92" font-size="11" fill="#746038">2</text>
    <text x="246" y="92" font-size="11" fill="#C5A260">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#e8d9bc">:</text>
    <text x="424" y="92" font-size="11" fill="#C5A260"><title>textLink.foreground &#8212; #C5A260</title>&quot;#2d1f14&quot;</text>
    <text x="216" y="111" font-size="11" fill="#746038">3</text>
    <text x="232" y="111" font-size="11" fill="#e8d9bc">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#100a05"><title>panel.background &#8212; #100a05</title></rect>
    <rect y="203" width="640" height="1" fill="#3d2c1c"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a89074"><title>panelTitle.inactiveForeground &#8212; #a89074</title>問題</text>
    <text x="50" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a89074">出力</text>
    <text x="86" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a89074">デバッグ コンソール</text>
    <text x="210" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#e8d9bc"><title>panelTitle.activeForeground &#8212; #e8d9bc</title>ターミナル</text>
    <text x="270" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a89074">GITLENS</text>
    <rect x="210" y="203" width="56" height="1" fill="#C5A260"><title>panelTitle.activeBorder &#8212; #C5A260</title></rect>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#e8d9bc"><title>terminal.foreground &#8212; #e8d9bc</title>PS C:\experiment\vscode-theme&gt; vscode-theme set cocoa-gold</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#9EB773"><title>terminal.ansiGreen &#8212; #9EB773</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#e8d9bc">テーマをワークスペースに適用しました。</text>
    <text x="14" y="257" font-size="11" fill="#e8d9bc">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#C5A260"><title>terminalCursor.foreground &#8212; #C5A260</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#2d1f14"><title>statusBar.background &#8212; #2d1f14</title></rect>
    <rect y="274" width="640" height="1" fill="#C5A260" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#e8d9bc" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#e8d9bc" opacity="0.85">問題なし</text>
  </g>
</svg>
</div>

**テーマ名:** `cocoa-gold`
**アクセント:** `#C5A260` &middot; **背景:** `#1a120a` &middot; **タイトルバー:** `#2d1f14`

---

### O &mdash; エスプレッソグリーン<!-- omit in toc -->


> 温かなクリーム地にディープなエスプレッソグリーンのアクセント。


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="エスプレッソグリーン theme preview">
  <defs><clipPath id="co-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#co-clip)">
    <rect width="640" height="296" fill="#f8f3e8"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#e4dbc4"><title>titleBar.activeBackground &#8212; #e4dbc4</title></rect>
    <rect y="26" width="640" height="2" fill="#00704A"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#8a9085"><title>titleBar.inactiveForeground &#8212; #8a9085</title>vscode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#ece4cc"><title>activityBar.background &#8212; #ece4cc</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#00704A"><title>activityBar.foreground &#8212; #00704A</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#8a9085" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #8a9085</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#8a9085" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #8a9085</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#f2ebd8"><title>sideBar.background &#8212; #f2ebd8</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#d8ceb4"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#00704A"><title>sideBarTitle.foreground &#8212; #00704A</title>エクスプローラー</text>
    <rect x="36" y="56" width="159" height="18" fill="#00704A" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #00704A</title></rect>
    <text x="58" y="69" font-size="11" fill="#00704A"><title>list.activeSelectionForeground &#8212; #00704A</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#1e2a1f"><title>sideBar.foreground &#8212; #1e2a1f</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#1e2a1f"><title>sideBar.foreground &#8212; #1e2a1f</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#f8f3e8"><title>editor.background &#8212; #f8f3e8</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#e8e0c8"><title>editorGroupHeader.tabsBackground &#8212; #e8e0c8</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#d8ceb4"/>
    <rect x="196" y="28" width="98" height="22" fill="#f8f3e8"><title>tab.activeBackground &#8212; #f8f3e8</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#00704A"><title>tab.activeBorderTop &#8212; #00704A</title></rect>
    <text x="210" y="44" font-size="11" fill="#1e2a1f">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#6a7065"><title>tab.inactiveForeground &#8212; #6a7065</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#a8a088"><title>editorLineNumber.foreground &#8212; #a8a088</title>1</text>
    <text x="232" y="73" font-size="11" fill="#00704A">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#1e2a1f">: {</text>
    <text x="216" y="92" font-size="11" fill="#a8a088">2</text>
    <text x="246" y="92" font-size="11" fill="#00704A">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#1e2a1f">:</text>
    <text x="424" y="92" font-size="11" fill="#00704A"><title>textLink.foreground &#8212; #00704A</title>&quot;#e4dbc4&quot;</text>
    <text x="216" y="111" font-size="11" fill="#a8a088">3</text>
    <text x="232" y="111" font-size="11" fill="#1e2a1f">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#f2ebd8"><title>panel.background &#8212; #f2ebd8</title></rect>
    <rect y="203" width="640" height="1" fill="#d8ceb4"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8a9085"><title>panelTitle.inactiveForeground &#8212; #8a9085</title>問題</text>
    <text x="50" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8a9085">出力</text>
    <text x="86" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8a9085">デバッグ コンソール</text>
    <text x="210" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#1e2a1f"><title>panelTitle.activeForeground &#8212; #1e2a1f</title>ターミナル</text>
    <text x="270" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8a9085">GITLENS</text>
    <rect x="210" y="203" width="56" height="1" fill="#00704A"><title>panelTitle.activeBorder &#8212; #00704A</title></rect>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#1e2a1f"><title>terminal.foreground &#8212; #1e2a1f</title>PS C:\experiment\vscode-theme&gt; vscode-theme set espresso-green</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#00704A"><title>terminal.ansiGreen &#8212; #00704A</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#1e2a1f">テーマをワークスペースに適用しました。</text>
    <text x="14" y="257" font-size="11" fill="#1e2a1f">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#00704A"><title>terminalCursor.foreground &#8212; #00704A</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#e4dbc4"><title>statusBar.background &#8212; #e4dbc4</title></rect>
    <rect y="274" width="640" height="1" fill="#00704A" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#1e2a1f" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#1e2a1f" opacity="0.85">問題なし</text>
  </g>
</svg>
</div>

**テーマ名:** `espresso-green`
**アクセント:** `#00704A` &middot; **背景:** `#f8f3e8` &middot; **タイトルバー:** `#e4dbc4`

---

### P &mdash; マウンテンサンセット<!-- omit in toc -->


> 夕暮れの山並みと空色のグラデーションを映す、ピーチのサンセットアクセント。


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="マウンテンサンセット theme preview">
  <defs><clipPath id="cp-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#cp-clip)">
    <rect width="640" height="296" fill="#0a0a14"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#1a1a2e"><title>titleBar.activeBackground &#8212; #1a1a2e</title></rect>
    <rect y="26" width="640" height="2" fill="#F19A4D"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#6a6080"><title>titleBar.inactiveForeground &#8212; #6a6080</title>vscode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#12122a"><title>activityBar.background &#8212; #12122a</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#F19A4D"><title>activityBar.foreground &#8212; #F19A4D</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#6a6080" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #6a6080</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#6a6080" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #6a6080</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#161628"><title>sideBar.background &#8212; #161628</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#2a2a4a"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#F19A4D"><title>sideBarTitle.foreground &#8212; #F19A4D</title>エクスプローラー</text>
    <rect x="36" y="56" width="159" height="18" fill="#F19A4D" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #F19A4D</title></rect>
    <text x="58" y="69" font-size="11" fill="#F19A4D"><title>list.activeSelectionForeground &#8212; #F19A4D</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#e8d8c4"><title>sideBar.foreground &#8212; #e8d8c4</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#e8d8c4"><title>sideBar.foreground &#8212; #e8d8c4</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#0a0a14"><title>editor.background &#8212; #0a0a14</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#161628"><title>editorGroupHeader.tabsBackground &#8212; #161628</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#2a2a4a"/>
    <rect x="196" y="28" width="98" height="22" fill="#0a0a14"><title>tab.activeBackground &#8212; #0a0a14</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#F19A4D"><title>tab.activeBorderTop &#8212; #F19A4D</title></rect>
    <text x="210" y="44" font-size="11" fill="#e8d8c4">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#9a8a9a"><title>tab.inactiveForeground &#8212; #9a8a9a</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#5a5070"><title>editorLineNumber.foreground &#8212; #5a5070</title>1</text>
    <text x="232" y="73" font-size="11" fill="#F19A4D">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#e8d8c4">: {</text>
    <text x="216" y="92" font-size="11" fill="#5a5070">2</text>
    <text x="246" y="92" font-size="11" fill="#F19A4D">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#e8d8c4">:</text>
    <text x="424" y="92" font-size="11" fill="#F19A4D"><title>textLink.foreground &#8212; #F19A4D</title>&quot;#1a1a2e&quot;</text>
    <text x="216" y="111" font-size="11" fill="#5a5070">3</text>
    <text x="232" y="111" font-size="11" fill="#e8d8c4">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#050510"><title>panel.background &#8212; #050510</title></rect>
    <rect y="203" width="640" height="1" fill="#2a2a4a"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#9a8a9a"><title>panelTitle.inactiveForeground &#8212; #9a8a9a</title>問題</text>
    <text x="50" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#9a8a9a">出力</text>
    <text x="86" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#9a8a9a">デバッグ コンソール</text>
    <text x="210" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#e8d8c4"><title>panelTitle.activeForeground &#8212; #e8d8c4</title>ターミナル</text>
    <text x="270" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#9a8a9a">GITLENS</text>
    <rect x="210" y="203" width="56" height="1" fill="#F19A4D"><title>panelTitle.activeBorder &#8212; #F19A4D</title></rect>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#e8d8c4"><title>terminal.foreground &#8212; #e8d8c4</title>PS C:\experiment\vscode-theme&gt; vscode-theme set mountain-sunset</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#8FC9A4"><title>terminal.ansiGreen &#8212; #8FC9A4</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#e8d8c4">テーマをワークスペースに適用しました。</text>
    <text x="14" y="257" font-size="11" fill="#e8d8c4">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#F19A4D"><title>terminalCursor.foreground &#8212; #F19A4D</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#1a1a2e"><title>statusBar.background &#8212; #1a1a2e</title></rect>
    <rect y="274" width="640" height="1" fill="#F19A4D" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#e8d8c4" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#e8d8c4" opacity="0.85">問題なし</text>
  </g>
</svg>
</div>

**テーマ名:** `mountain-sunset`
**アクセント:** `#F19A4D` &middot; **背景:** `#0a0a14` &middot; **タイトルバー:** `#1a1a2e`

---

### T &mdash; コバルト + クリムゾン<!-- omit in toc -->


> 深いコバルトブルーに鮮やかなクリムゾンのアクセント。原色の高コントラストな存在感。


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="コバルト + クリムゾン theme preview">
  <defs><clipPath id="ct-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#ct-clip)">
    <rect width="640" height="296" fill="#0a1230"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#0057B8"><title>titleBar.activeBackground &#8212; #0057B8</title></rect>
    <rect y="26" width="640" height="2" fill="#E4002B"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#a0a8c0"><title>titleBar.inactiveForeground &#8212; #a0a8c0</title>vscode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#081028"><title>activityBar.background &#8212; #081028</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#E4002B"><title>activityBar.foreground &#8212; #E4002B</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#5a6080" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #5a6080</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#5a6080" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #5a6080</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#122050"><title>sideBar.background &#8212; #122050</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#1a2450"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#E4002B"><title>sideBarTitle.foreground &#8212; #E4002B</title>エクスプローラー</text>
    <rect x="36" y="56" width="159" height="18" fill="#E4002B" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #E4002B</title></rect>
    <text x="58" y="69" font-size="11" fill="#E4002B"><title>list.activeSelectionForeground &#8212; #E4002B</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#F0F0F5"><title>sideBar.foreground &#8212; #F0F0F5</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#F0F0F5"><title>sideBar.foreground &#8212; #F0F0F5</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#0a1230"><title>editor.background &#8212; #0a1230</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#122050"><title>editorGroupHeader.tabsBackground &#8212; #122050</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#1a2450"/>
    <rect x="196" y="28" width="98" height="22" fill="#0a1230"><title>tab.activeBackground &#8212; #0a1230</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#E4002B"><title>tab.activeBorderTop &#8212; #E4002B</title></rect>
    <text x="210" y="44" font-size="11" fill="#F0F0F5">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#a0a8c0"><title>tab.inactiveForeground &#8212; #a0a8c0</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#4a5075"><title>editorLineNumber.foreground &#8212; #4a5075</title>1</text>
    <text x="232" y="73" font-size="11" fill="#E4002B">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#F0F0F5">: {</text>
    <text x="216" y="92" font-size="11" fill="#4a5075">2</text>
    <text x="246" y="92" font-size="11" fill="#E4002B">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#F0F0F5">:</text>
    <text x="424" y="92" font-size="11" fill="#5A9AE8"><title>textLink.foreground &#8212; #5A9AE8</title>&quot;#0057B8&quot;</text>
    <text x="216" y="111" font-size="11" fill="#4a5075">3</text>
    <text x="232" y="111" font-size="11" fill="#F0F0F5">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#050a1a"><title>panel.background &#8212; #050a1a</title></rect>
    <rect y="203" width="640" height="1" fill="#1a2450"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a0a8c0"><title>panelTitle.inactiveForeground &#8212; #a0a8c0</title>問題</text>
    <text x="50" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a0a8c0">出力</text>
    <text x="86" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a0a8c0">デバッグ コンソール</text>
    <text x="210" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#F0F0F5"><title>panelTitle.activeForeground &#8212; #F0F0F5</title>ターミナル</text>
    <text x="270" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a0a8c0">GITLENS</text>
    <rect x="210" y="203" width="56" height="1" fill="#E4002B"><title>panelTitle.activeBorder &#8212; #E4002B</title></rect>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#F0F0F5"><title>terminal.foreground &#8212; #F0F0F5</title>PS C:\experiment\vscode-theme&gt; vscode-theme set cobalt-crimson</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#50C878"><title>terminal.ansiGreen &#8212; #50C878</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#F0F0F5">テーマをワークスペースに適用しました。</text>
    <text x="14" y="257" font-size="11" fill="#F0F0F5">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#E4002B"><title>terminalCursor.foreground &#8212; #E4002B</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#0057B8"><title>statusBar.background &#8212; #0057B8</title></rect>
    <rect y="274" width="640" height="1" fill="#E4002B" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#F0F0F5" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#F0F0F5" opacity="0.85">問題なし</text>
  </g>
</svg>
</div>

**テーマ名:** `cobalt-crimson`
**アクセント:** `#E4002B` &middot; **背景:** `#0a1230` &middot; **タイトルバー:** `#0057B8`

---


### U &mdash; カナリー + レッド（ライト）<!-- omit in toc -->


> カナリーイエローのライトベースに、レーシングレッドのアクセントとイタリアングリーンの差し色。


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="カナリー + レッド（ライト） theme preview">
  <defs><clipPath id="cu-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#cu-clip)">
    <rect width="640" height="296" fill="#FFF8D6"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#FFDE00"><title>titleBar.activeBackground &#8212; #FFDE00</title></rect>
    <rect y="26" width="640" height="2" fill="#B8001C"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#6a4a20"><title>titleBar.inactiveForeground &#8212; #6a4a20</title>vscode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#FFDE00"><title>activityBar.background &#8212; #FFDE00</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#1a1200"><title>activityBar.foreground &#8212; #1a1200</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#8a6020" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #8a6020</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#8a6020" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #8a6020</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#FBEEB0"><title>sideBar.background &#8212; #FBEEB0</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#E5C890"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#B8001C"><title>sideBarTitle.foreground &#8212; #B8001C</title>エクスプローラー</text>
    <rect x="36" y="56" width="159" height="18" fill="#B8001C" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #B8001C</title></rect>
    <text x="58" y="69" font-size="11" fill="#B8001C"><title>list.activeSelectionForeground &#8212; #B8001C</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#1a1200"><title>sideBar.foreground &#8212; #1a1200</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#1a1200"><title>sideBar.foreground &#8212; #1a1200</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#FFF8D6"><title>editor.background &#8212; #FFF8D6</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#FBEEB0"><title>editorGroupHeader.tabsBackground &#8212; #FBEEB0</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#E5C890"/>
    <rect x="196" y="28" width="98" height="22" fill="#FFF8D6"><title>tab.activeBackground &#8212; #FFF8D6</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#B8001C"><title>tab.activeBorderTop &#8212; #B8001C</title></rect>
    <text x="210" y="44" font-size="11" fill="#1a1200">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#6a4a20"><title>tab.inactiveForeground &#8212; #6a4a20</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#b89a68"><title>editorLineNumber.foreground &#8212; #b89a68</title>1</text>
    <text x="232" y="73" font-size="11" fill="#B8001C">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#1a1200">: {</text>
    <text x="216" y="92" font-size="11" fill="#b89a68">2</text>
    <text x="246" y="92" font-size="11" fill="#B8001C">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#1a1200">:</text>
    <text x="424" y="92" font-size="11" fill="#B8001C"><title>textLink.foreground &#8212; #B8001C</title>&quot;#FFDE00&quot;</text>
    <text x="216" y="111" font-size="11" fill="#b89a68">3</text>
    <text x="232" y="111" font-size="11" fill="#1a1200">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#F5E280"><title>panel.background &#8212; #F5E280</title></rect>
    <rect y="203" width="640" height="1" fill="#E5C890"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#6a4a20"><title>panelTitle.inactiveForeground &#8212; #6a4a20</title>問題</text>
    <text x="50" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#6a4a20">出力</text>
    <text x="86" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#6a4a20">デバッグ コンソール</text>
    <text x="210" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#1a1200"><title>panelTitle.activeForeground &#8212; #1a1200</title>ターミナル</text>
    <text x="270" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#6a4a20">GITLENS</text>
    <rect x="210" y="203" width="56" height="1" fill="#B8001C"><title>panelTitle.activeBorder &#8212; #B8001C</title></rect>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#1a1200"><title>terminal.foreground &#8212; #1a1200</title>PS C:\experiment\vscode-theme&gt; vscode-theme set canary-red</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#008C45"><title>terminal.ansiGreen &#8212; #008C45</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#1a1200">テーマをワークスペースに適用しました。</text>
    <text x="14" y="257" font-size="11" fill="#1a1200">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#B8001C"><title>terminalCursor.foreground &#8212; #B8001C</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#FFDE00"><title>statusBar.background &#8212; #FFDE00</title></rect>
    <rect y="274" width="640" height="1" fill="#B8001C" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#1a1200" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#1a1200" opacity="0.85">問題なし</text>
  </g>
</svg>
</div>

**テーマ名:** `canary-red`
**アクセント:** `#B8001C` &middot; **背景:** `#FFF8D6` &middot; **タイトルバー:** `#FFDE00`

---


### V &mdash; エンバーゴールド<!-- omit in toc -->


> 温かいチャコールに浮かぶアンティークゴールドと、アンバー色の残り火のハイライト。


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="エンバーゴールド theme preview">
  <defs><clipPath id="cv-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#cv-clip)">
    <rect width="640" height="296" fill="#0c0c10"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#18130a"><title>titleBar.activeBackground &#8212; #18130a</title></rect>
    <rect y="26" width="640" height="2" fill="#C9A84E"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#6a604a"><title>titleBar.inactiveForeground &#8212; #6a604a</title>vscode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#0e0e14"><title>activityBar.background &#8212; #0e0e14</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#C9A84E"><title>activityBar.foreground &#8212; #C9A84E</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#6a604a" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #6a604a</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#6a604a" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #6a604a</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#141418"><title>sideBar.background &#8212; #141418</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#2a2520"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#C9A84E"><title>sideBarTitle.foreground &#8212; #C9A84E</title>エクスプローラー</text>
    <rect x="36" y="56" width="159" height="18" fill="#C9A84E" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #C9A84E</title></rect>
    <text x="58" y="69" font-size="11" fill="#C9A84E"><title>list.activeSelectionForeground &#8212; #C9A84E</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#f0e0b8"><title>sideBar.foreground &#8212; #f0e0b8</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#f0e0b8"><title>sideBar.foreground &#8212; #f0e0b8</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#0c0c10"><title>editor.background &#8212; #0c0c10</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#141418"><title>editorGroupHeader.tabsBackground &#8212; #141418</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#2a2520"/>
    <rect x="196" y="28" width="98" height="22" fill="#0c0c10"><title>tab.activeBackground &#8212; #0c0c10</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#C9A84E"><title>tab.activeBorderTop &#8212; #C9A84E</title></rect>
    <text x="210" y="44" font-size="11" fill="#f0e0b8">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#a09478"><title>tab.inactiveForeground &#8212; #a09478</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#5a4e3a"><title>editorLineNumber.foreground &#8212; #5a4e3a</title>1</text>
    <text x="232" y="73" font-size="11" fill="#C9A84E">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#f0e0b8">: {</text>
    <text x="216" y="92" font-size="11" fill="#5a4e3a">2</text>
    <text x="246" y="92" font-size="11" fill="#C9A84E">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#f0e0b8">:</text>
    <text x="424" y="92" font-size="11" fill="#D9802F"><title>textLink.foreground &#8212; #D9802F</title>&quot;#18130a&quot;</text>
    <text x="216" y="111" font-size="11" fill="#5a4e3a">3</text>
    <text x="232" y="111" font-size="11" fill="#f0e0b8">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#080810"><title>panel.background &#8212; #080810</title></rect>
    <rect y="203" width="640" height="1" fill="#2a2520"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a09478"><title>panelTitle.inactiveForeground &#8212; #a09478</title>問題</text>
    <text x="50" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a09478">出力</text>
    <text x="86" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a09478">デバッグ コンソール</text>
    <text x="210" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#f0e0b8"><title>panelTitle.activeForeground &#8212; #f0e0b8</title>ターミナル</text>
    <text x="270" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a09478">GITLENS</text>
    <rect x="210" y="203" width="56" height="1" fill="#C9A84E"><title>panelTitle.activeBorder &#8212; #C9A84E</title></rect>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#f0e0b8"><title>terminal.foreground &#8212; #f0e0b8</title>PS C:\experiment\vscode-theme&gt; vscode-theme set ember-gold</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#8BC078"><title>terminal.ansiGreen &#8212; #8BC078</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#f0e0b8">テーマをワークスペースに適用しました。</text>
    <text x="14" y="257" font-size="11" fill="#f0e0b8">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#C9A84E"><title>terminalCursor.foreground &#8212; #C9A84E</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#18130a"><title>statusBar.background &#8212; #18130a</title></rect>
    <rect y="274" width="640" height="1" fill="#C9A84E" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#f0e0b8" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#f0e0b8" opacity="0.85">問題なし</text>
  </g>
</svg>
</div>

**テーマ名:** `ember-gold`
**アクセント:** `#C9A84E` &middot; **背景:** `#0c0c10` &middot; **タイトルバー:** `#18130a`

---


### W &mdash; アルパインサンセット<!-- omit in toc -->


> 山岳の夕暮れを思わせる紫のトワイライトに、サンセットレッドのアクセント。


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="アルパインサンセット theme preview">
  <defs><clipPath id="cw-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#cw-clip)">
    <rect width="640" height="296" fill="#1a1438"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#2a1a55"><title>titleBar.activeBackground &#8212; #2a1a55</title></rect>
    <rect y="26" width="640" height="2" fill="#E4002B"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#a898c8"><title>titleBar.inactiveForeground &#8212; #a898c8</title>vscode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#1a1030"><title>activityBar.background &#8212; #1a1030</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#E4002B"><title>activityBar.foreground &#8212; #E4002B</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#6a5a85" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #6a5a85</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#6a5a85" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #6a5a85</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#231a48"><title>sideBar.background &#8212; #231a48</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#3a2a68"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#E4002B"><title>sideBarTitle.foreground &#8212; #E4002B</title>エクスプローラー</text>
    <rect x="36" y="56" width="159" height="18" fill="#E4002B" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #E4002B</title></rect>
    <text x="58" y="69" font-size="11" fill="#E4002B"><title>list.activeSelectionForeground &#8212; #E4002B</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#ede0f5"><title>sideBar.foreground &#8212; #ede0f5</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#ede0f5"><title>sideBar.foreground &#8212; #ede0f5</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#1a1438"><title>editor.background &#8212; #1a1438</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#231a48"><title>editorGroupHeader.tabsBackground &#8212; #231a48</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#3a2a68"/>
    <rect x="196" y="28" width="98" height="22" fill="#1a1438"><title>tab.activeBackground &#8212; #1a1438</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#E4002B"><title>tab.activeBorderTop &#8212; #E4002B</title></rect>
    <text x="210" y="44" font-size="11" fill="#ede0f5">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#a898c8"><title>tab.inactiveForeground &#8212; #a898c8</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#5a4885"><title>editorLineNumber.foreground &#8212; #5a4885</title>1</text>
    <text x="232" y="73" font-size="11" fill="#E4002B">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#ede0f5">: {</text>
    <text x="216" y="92" font-size="11" fill="#5a4885">2</text>
    <text x="246" y="92" font-size="11" fill="#E4002B">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#ede0f5">:</text>
    <text x="424" y="92" font-size="11" fill="#7088F0"><title>textLink.foreground &#8212; #7088F0</title>&quot;#2a1a55&quot;</text>
    <text x="216" y="111" font-size="11" fill="#5a4885">3</text>
    <text x="232" y="111" font-size="11" fill="#ede0f5">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#0e0a25"><title>panel.background &#8212; #0e0a25</title></rect>
    <rect y="203" width="640" height="1" fill="#3a2a68"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a898c8"><title>panelTitle.inactiveForeground &#8212; #a898c8</title>問題</text>
    <text x="50" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a898c8">出力</text>
    <text x="86" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a898c8">デバッグ コンソール</text>
    <text x="210" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#ede0f5"><title>panelTitle.activeForeground &#8212; #ede0f5</title>ターミナル</text>
    <text x="270" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#a898c8">GITLENS</text>
    <rect x="210" y="203" width="56" height="1" fill="#E4002B"><title>panelTitle.activeBorder &#8212; #E4002B</title></rect>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#ede0f5"><title>terminal.foreground &#8212; #ede0f5</title>PS C:\experiment\vscode-theme&gt; vscode-theme set alpine-sunset</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#66D090"><title>terminal.ansiGreen &#8212; #66D090</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#ede0f5">テーマをワークスペースに適用しました。</text>
    <text x="14" y="257" font-size="11" fill="#ede0f5">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#E4002B"><title>terminalCursor.foreground &#8212; #E4002B</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#2a1a55"><title>statusBar.background &#8212; #2a1a55</title></rect>
    <rect y="274" width="640" height="1" fill="#E4002B" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#ede0f5" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#ede0f5" opacity="0.85">問題なし</text>
  </g>
</svg>
</div>

**テーマ名:** `alpine-sunset`
**アクセント:** `#E4002B` &middot; **背景:** `#1a1438` &middot; **タイトルバー:** `#2a1a55`

---


### X &mdash; セージペーパー<!-- omit in toc -->


> ペーパークリームの暖色背景にセージグリーンのアクセント。ブルーライトを抑えた目に優しい配色で、長時間の読書・コーディングセッション向け。


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="セージペーパー theme preview">
  <defs><clipPath id="cx-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#cx-clip)">
    <rect width="640" height="296" fill="#F5F0E0"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#E5DCC5"><title>titleBar.activeBackground &#8212; #E5DCC5</title></rect>
    <rect y="26" width="640" height="2" fill="#5E8A5E"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#6B7A62"><title>titleBar.inactiveForeground &#8212; #6B7A62</title>vscode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#ECE3CE"><title>activityBar.background &#8212; #ECE3CE</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#5E8A5E"><title>activityBar.foreground &#8212; #5E8A5E</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#839078" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #839078</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#839078" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #839078</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#EFE9D6"><title>sideBar.background &#8212; #EFE9D6</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#D4C9AE"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#5E8A5E"><title>sideBarTitle.foreground &#8212; #5E8A5E</title>エクスプローラー</text>
    <rect x="36" y="56" width="159" height="18" fill="#5E8A5E" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #5E8A5E</title></rect>
    <text x="58" y="69" font-size="11" fill="#5E8A5E"><title>list.activeSelectionForeground &#8212; #5E8A5E</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#2F3A2A"><title>sideBar.foreground &#8212; #2F3A2A</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#2F3A2A"><title>sideBar.foreground &#8212; #2F3A2A</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#F5F0E0"><title>editor.background &#8212; #F5F0E0</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#E9E1CC"><title>editorGroupHeader.tabsBackground &#8212; #E9E1CC</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#D4C9AE"/>
    <rect x="196" y="28" width="98" height="22" fill="#F5F0E0"><title>tab.activeBackground &#8212; #F5F0E0</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#5E8A5E"><title>tab.activeBorderTop &#8212; #5E8A5E</title></rect>
    <text x="210" y="44" font-size="11" fill="#2F3A2A">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#5D6B52"><title>tab.inactiveForeground &#8212; #5D6B52</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#A09574"><title>editorLineNumber.foreground &#8212; #A09574</title>1</text>
    <text x="232" y="73" font-size="11" fill="#5E8A5E">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#2F3A2A">: {</text>
    <text x="216" y="92" font-size="11" fill="#A09574">2</text>
    <text x="246" y="92" font-size="11" fill="#5E8A5E">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#2F3A2A">:</text>
    <text x="424" y="92" font-size="11" fill="#4A7249"><title>textLink.foreground &#8212; #4A7249</title>&quot;#E5DCC5&quot;</text>
    <text x="216" y="111" font-size="11" fill="#A09574">3</text>
    <text x="232" y="111" font-size="11" fill="#2F3A2A">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#EFE9D6"><title>panel.background &#8212; #EFE9D6</title></rect>
    <rect y="203" width="640" height="1" fill="#D4C9AE"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#839078"><title>panelTitle.inactiveForeground &#8212; #839078</title>問題</text>
    <text x="50" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#839078">出力</text>
    <text x="86" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#839078">デバッグ コンソール</text>
    <text x="210" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#2F3A2A"><title>panelTitle.activeForeground &#8212; #2F3A2A</title>ターミナル</text>
    <text x="270" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#839078">GITLENS</text>
    <rect x="210" y="203" width="56" height="1" fill="#5E8A5E"><title>panelTitle.activeBorder &#8212; #5E8A5E</title></rect>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#2F3A2A"><title>terminal.foreground &#8212; #2F3A2A</title>PS C:\experiment\vscode-theme&gt; vscode-theme set sage-paper</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#4A7249"><title>terminal.ansiGreen &#8212; #4A7249</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#2F3A2A">テーマをワークスペースに適用しました。</text>
    <text x="14" y="257" font-size="11" fill="#2F3A2A">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#5E8A5E"><title>terminalCursor.foreground &#8212; #5E8A5E</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#E5DCC5"><title>statusBar.background &#8212; #E5DCC5</title></rect>
    <rect y="274" width="640" height="1" fill="#5E8A5E" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#2F3A2A" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#2F3A2A" opacity="0.85">問題なし</text>
  </g>
</svg>
</div>

**テーマ名:** `sage-paper`  
**アクセント:** `#5E8A5E` &middot; **背景:** `#F5F0E0` &middot; **タイトルバー:** `#E5DCC5`

---


### Y &mdash; セージペーパー ダーク<!-- omit in toc -->


> 深い暖色オリーブ背景に、くすんだセージのアクセント。`sage-paper` のダーク版。暖色のアンダートーンがブルーライトを抑え、夜のコーディングに馴染む。


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="セージペーパー ダーク theme preview">
  <defs><clipPath id="cy-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#cy-clip)">
    <rect width="640" height="296" fill="#1E241B"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#2C3228"><title>titleBar.activeBackground &#8212; #2C3228</title></rect>
    <rect y="26" width="640" height="2" fill="#A3C5A2"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#9AA090"><title>titleBar.inactiveForeground &#8212; #9AA090</title>vscode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#262C22"><title>activityBar.background &#8212; #262C22</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#A3C5A2"><title>activityBar.foreground &#8212; #A3C5A2</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#8A9280" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #8A9280</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#8A9280" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #8A9280</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#262C22"><title>sideBar.background &#8212; #262C22</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#3D4538"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#A3C5A2"><title>sideBarTitle.foreground &#8212; #A3C5A2</title>エクスプローラー</text>
    <rect x="36" y="56" width="159" height="18" fill="#A3C5A2" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #A3C5A2</title></rect>
    <text x="58" y="69" font-size="11" fill="#A3C5A2"><title>list.activeSelectionForeground &#8212; #A3C5A2</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#CFCAB0"><title>sideBar.foreground &#8212; #CFCAB0</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#CFCAB0"><title>sideBar.foreground &#8212; #CFCAB0</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#1E241B"><title>editor.background &#8212; #1E241B</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#2A3026"><title>editorGroupHeader.tabsBackground &#8212; #2A3026</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#3D4538"/>
    <rect x="196" y="28" width="98" height="22" fill="#1E241B"><title>tab.activeBackground &#8212; #1E241B</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#A3C5A2"><title>tab.activeBorderTop &#8212; #A3C5A2</title></rect>
    <text x="210" y="44" font-size="11" fill="#CFCAB0">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#9AA090"><title>tab.inactiveForeground &#8212; #9AA090</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#5E6458"><title>editorLineNumber.foreground &#8212; #5E6458</title>1</text>
    <text x="232" y="73" font-size="11" fill="#A3C5A2">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#CFCAB0">: {</text>
    <text x="216" y="92" font-size="11" fill="#5E6458">2</text>
    <text x="246" y="92" font-size="11" fill="#A3C5A2">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#CFCAB0">:</text>
    <text x="424" y="92" font-size="11" fill="#A3C5A2"><title>textLink.foreground &#8212; #A3C5A2</title>&quot;#2C3228&quot;</text>
    <text x="216" y="111" font-size="11" fill="#5E6458">3</text>
    <text x="232" y="111" font-size="11" fill="#CFCAB0">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#262C22"><title>panel.background &#8212; #262C22</title></rect>
    <rect y="203" width="640" height="1" fill="#3D4538"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8A9280"><title>panelTitle.inactiveForeground &#8212; #8A9280</title>問題</text>
    <text x="50" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8A9280">出力</text>
    <text x="86" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8A9280">デバッグ コンソール</text>
    <text x="210" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#CFCAB0"><title>panelTitle.activeForeground &#8212; #CFCAB0</title>ターミナル</text>
    <text x="270" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#8A9280">GITLENS</text>
    <rect x="210" y="203" width="56" height="1" fill="#A3C5A2"><title>panelTitle.activeBorder &#8212; #A3C5A2</title></rect>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#CFCAB0"><title>terminal.foreground &#8212; #CFCAB0</title>PS C:\experiment\vscode-theme&gt; vscode-theme set sage-paper-dark</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#7FA77E"><title>terminal.ansiGreen &#8212; #7FA77E</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#CFCAB0">テーマをワークスペースに適用しました。</text>
    <text x="14" y="257" font-size="11" fill="#CFCAB0">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#A3C5A2"><title>terminalCursor.foreground &#8212; #A3C5A2</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#2C3228"><title>statusBar.background &#8212; #2C3228</title></rect>
    <rect y="274" width="640" height="1" fill="#A3C5A2" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#CFCAB0" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#CFCAB0" opacity="0.85">問題なし</text>
  </g>
</svg>
</div>

**テーマ名:** `sage-paper-dark`  
**アクセント:** `#A3C5A2` &middot; **背景:** `#1E241B` &middot; **タイトルバー:** `#2C3228`

---


### Z &mdash; プリズムスパーク<!-- omit in toc -->


> クールスレートの背景に、コーンフラワーブルー・コーラル・ミント・ゴールドの 4 色グラデーションパレットを UI 状態と ANSI パレットへ分配。4 点星プリズムからの着想。


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="プリズムスパーク theme preview">
  <defs><clipPath id="cz-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#cz-clip)">
    <rect width="640" height="296" fill="#1A1D28"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#262B37"><title>titleBar.activeBackground &#8212; #262B37</title></rect>
    <rect y="26" width="640" height="2" fill="#6495ED"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#9EA3B3"><title>titleBar.inactiveForeground &#8212; #9EA3B3</title>vscode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#20242F"><title>activityBar.background &#8212; #20242F</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#6495ED"><title>activityBar.foreground &#8212; #6495ED</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#7A8094" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #7A8094</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#7A8094" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #7A8094</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#20242F"><title>sideBar.background &#8212; #20242F</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#363D4D"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#6495ED"><title>sideBarTitle.foreground &#8212; #6495ED</title>エクスプローラー</text>
    <rect x="36" y="56" width="159" height="18" fill="#6495ED" fill-opacity="0.133"><title>list.activeSelectionBackground &#8212; #6495ED</title></rect>
    <text x="58" y="69" font-size="11" fill="#6495ED"><title>list.activeSelectionForeground &#8212; #6495ED</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#F4BC42"><title>sideBar.foreground &#8212; #F4BC42</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#70C77F"><title>sideBar.foreground &#8212; #70C77F</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#1A1D28"><title>editor.background &#8212; #1A1D28</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#262B37"><title>editorGroupHeader.tabsBackground &#8212; #262B37</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#363D4D"/>
    <rect x="196" y="28" width="98" height="22" fill="#1A1D28"><title>tab.activeBackground &#8212; #1A1D28</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#6495ED"><title>tab.activeBorderTop &#8212; #6495ED</title></rect>
    <text x="210" y="44" font-size="11" fill="#D8DCE8">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#9EA3B3"><title>tab.inactiveForeground &#8212; #9EA3B3</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#585F70"><title>editorLineNumber.foreground &#8212; #585F70</title>1</text>
    <text x="232" y="73" font-size="11" fill="#6495ED">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#D8DCE8">: {</text>
    <text x="216" y="92" font-size="11" fill="#585F70">2</text>
    <text x="246" y="92" font-size="11" fill="#6495ED">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#D8DCE8">:</text>
    <text x="424" y="92" font-size="11" fill="#85AFF5"><title>textLink.foreground &#8212; #85AFF5</title>&quot;#262B37&quot;</text>
    <text x="216" y="111" font-size="11" fill="#585F70">3</text>
    <text x="232" y="111" font-size="11" fill="#D8DCE8">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#20242F"><title>panel.background &#8212; #20242F</title></rect>
    <rect y="203" width="640" height="1" fill="#363D4D"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#7A8094"><title>panelTitle.inactiveForeground &#8212; #7A8094</title>問題</text>
    <text x="50" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#7A8094">出力</text>
    <text x="86" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#7A8094">デバッグ コンソール</text>
    <text x="210" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#D8DCE8"><title>panelTitle.activeForeground &#8212; #D8DCE8</title>ターミナル</text>
    <text x="270" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#7A8094">GITLENS</text>
    <rect x="210" y="203" width="56" height="1" fill="#6495ED"><title>panelTitle.activeBorder &#8212; #6495ED</title></rect>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#D8DCE8"><title>terminal.foreground &#8212; #D8DCE8</title>PS C:\experiment\vscode-theme&gt; vscode-theme set prism-spark</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#70C77F"><title>terminal.ansiGreen &#8212; #70C77F</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#D8DCE8">テーマをワークスペースに適用しました。</text>
    <text x="14" y="257" font-size="11" fill="#D8DCE8">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#6495ED"><title>terminalCursor.foreground &#8212; #6495ED</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#262B37"><title>statusBar.background &#8212; #262B37</title></rect>
    <rect y="274" width="640" height="1" fill="#6495ED" fill-opacity="0.333"/>
    <text x="10" y="289" font-size="11" fill="#D8DCE8" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#D8DCE8" opacity="0.85">問題なし</text>
  </g>
</svg>
</div>

**テーマ名:** `prism-spark`  
**アクセント:** `#6495ED` &middot; **背景:** `#1A1D28` &middot; **タイトルバー:** `#262B37`

---


### AA &mdash; プリズムビビッド<!-- omit in toc -->


> `prism-spark` の彩度を上げた兄弟テーマ。コーラル・ブルー・ミント・ゴールド・マゼンタ・シアンの 6 色を UI の各サーフェスに割り振り、視線を動かすごとに違う色が現れる構成。


<div align="center">
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:640px" font-family="Menlo, Consolas, monospace" role="img" aria-label="プリズムビビッド theme preview">
  <defs><clipPath id="caa-clip"><rect width="640" height="296" rx="10" ry="10"/></clipPath></defs>
  <g clip-path="url(#caa-clip)">
    <rect width="640" height="296" fill="#161923"/>
    <!-- Title bar -->
    <rect width="640" height="28" fill="#241E3A"><title>titleBar.activeBackground &#8212; #241E3A</title></rect>
    <rect y="26" width="640" height="2" fill="#FF7A7A"/>
    <circle cx="19" cy="14" r="5" fill="#ff5f57"/>
    <circle cx="34" cy="14" r="5" fill="#febc2e"/>
    <circle cx="49" cy="14" r="5" fill="#28c840"/>
    <text x="320" y="18" text-anchor="middle" font-size="11" fill="#A8AEC2"><title>titleBar.inactiveForeground &#8212; #A8AEC2</title>vscode-theme &#8212; VS Code</text>
    <!-- Activity bar -->
    <rect y="28" width="36" height="150" fill="#1D2030"><title>activityBar.background &#8212; #1D2030</title></rect>
    <rect x="9" y="36" width="18" height="18" rx="3" fill="#5B9DFF"><title>activityBar.foreground &#8212; #5B9DFF</title></rect>
    <rect x="9" y="64" width="18" height="18" rx="3" fill="#7A8196" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #7A8196</title></rect>
    <rect x="9" y="92" width="18" height="18" rx="3" fill="#7A8196" opacity="0.55"><title>activityBar.inactiveForeground &#8212; #7A8196</title></rect>
    <!-- Sidebar -->
    <rect x="36" y="28" width="160" height="150" fill="#1D2030"><title>sideBar.background &#8212; #1D2030</title></rect>
    <rect x="195" y="28" width="1" height="150" fill="#3A3F54"/>
    <text x="46" y="46" font-size="10" font-weight="700" letter-spacing="0.8" fill="#6EDB8E"><title>sideBarTitle.foreground &#8212; #6EDB8E</title>エクスプローラー</text>
    <rect x="36" y="56" width="159" height="18" fill="#D681E8" fill-opacity="0.2"><title>list.activeSelectionBackground &#8212; #D681E8</title></rect>
    <text x="58" y="69" font-size="11" fill="#E8ECF8"><title>list.activeSelectionForeground &#8212; #E8ECF8</title>settings.json</text>
    <text x="58" y="88" font-size="11" fill="#FFCE5C"><title>sideBar.foreground &#8212; #FFCE5C</title>src/index.ts</text>
    <text x="58" y="107" font-size="11" fill="#6EDB8E"><title>sideBar.foreground &#8212; #6EDB8E</title>package.json</text>
    <!-- Editor -->
    <rect x="196" y="28" width="444" height="150" fill="#161923"><title>editor.background &#8212; #161923</title></rect>
    <rect x="196" y="28" width="444" height="22" fill="#242839"><title>editorGroupHeader.tabsBackground &#8212; #242839</title></rect>
    <rect x="196" y="49" width="444" height="1" fill="#3A3F54"/>
    <rect x="196" y="28" width="98" height="22" fill="#161923"><title>tab.activeBackground &#8212; #161923</title></rect>
    <rect x="196" y="28" width="98" height="2" fill="#FFCE5C"><title>tab.activeBorderTop &#8212; #FFCE5C</title></rect>
    <text x="210" y="44" font-size="11" fill="#E8ECF8">settings.json</text>
    <text x="308" y="44" font-size="11" fill="#A8AEC2"><title>tab.inactiveForeground &#8212; #A8AEC2</title>index.ts</text>
    <!-- Code lines -->
    <text x="216" y="73" font-size="11" fill="#5A6078"><title>editorLineNumber.foreground &#8212; #5A6078</title>1</text>
    <text x="232" y="73" font-size="11" fill="#5B9DFF">&quot;workbench.colorCustomizations&quot;</text>
    <text x="426" y="73" font-size="11" fill="#E8ECF8">: {</text>
    <text x="216" y="92" font-size="11" fill="#5A6078">2</text>
    <text x="246" y="92" font-size="11" fill="#5B9DFF">&quot;titleBar.activeBackground&quot;</text>
    <text x="416" y="92" font-size="11" fill="#E8ECF8">:</text>
    <text x="424" y="92" font-size="11" fill="#6EDB8E"><title>textLink.foreground &#8212; #6EDB8E</title>&quot;#241E3A&quot;</text>
    <text x="216" y="111" font-size="11" fill="#5A6078">3</text>
    <text x="232" y="111" font-size="11" fill="#E8ECF8">}</text>
    <!-- Panel -->
    <rect y="178" width="640" height="96" fill="#1D2030"><title>panel.background &#8212; #1D2030</title></rect>
    <rect y="203" width="640" height="1" fill="#3A3F54"/>
    <text x="14" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#7A8196"><title>panelTitle.inactiveForeground &#8212; #7A8196</title>問題</text>
    <text x="50" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#7A8196">出力</text>
    <text x="86" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#7A8196">デバッグ コンソール</text>
    <text x="210" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#E8ECF8"><title>panelTitle.activeForeground &#8212; #E8ECF8</title>ターミナル</text>
    <text x="270" y="194" font-size="10" font-weight="700" letter-spacing="0.8" fill="#7A8196">GITLENS</text>
    <rect x="210" y="203" width="56" height="1" fill="#D681E8"><title>panelTitle.activeBorder &#8212; #D681E8</title></rect>
    <!-- Terminal -->
    <text x="14" y="225" font-size="11" fill="#E8ECF8"><title>terminal.foreground &#8212; #E8ECF8</title>PS C:\experiment\vscode-theme&gt; vscode-theme set prism-vivid</text>
    <text x="14" y="241" font-size="11" font-weight="700" fill="#6EDB8E"><title>terminal.ansiGreen &#8212; #6EDB8E</title>&#10003;</text>
    <text x="26" y="241" font-size="11" fill="#E8ECF8">テーマをワークスペースに適用しました。</text>
    <text x="14" y="257" font-size="11" fill="#E8ECF8">PS C:\experiment\vscode-theme&gt;</text>
    <rect x="210" y="247" width="7" height="11" fill="#FF7A7A"><title>terminalCursor.foreground &#8212; #FF7A7A</title></rect>
    <!-- Status bar -->
    <rect y="274" width="640" height="22" fill="#2A2046"><title>statusBar.background &#8212; #2A2046</title></rect>
    <rect y="274" width="640" height="1" fill="#4DD8D0" fill-opacity="1.0"/>
    <text x="10" y="289" font-size="11" fill="#E8ECF8" opacity="0.85">main</text>
    <text x="50" y="289" font-size="11" fill="#E8ECF8" opacity="0.85">問題なし</text>
  </g>
</svg>
</div>

**テーマ名:** `prism-vivid`  
**アクセント:** `#5B9DFF`（プライマリ） &middot; **背景:** `#161923` &middot; **タイトルバー:** `#241E3A`

---


## インストール

テーマ JSON はすべてリポジトリ内の [.vscode-themes/](.vscode-themes/) に置かれています。スイッチャーは実行時に `~/.vscode-themes/` を参照するため、インストール手順は「これらの JSON を `~/.vscode-themes/` にコピーし、シェルプロファイルからスクリプトを source する」だけです。git 上のスクリプトには `__VERSION__` プレースホルダが入っており、以下の手順で [VERSION](VERSION) の現在値に置換されます（理由は [バージョン](#バージョン) を参照）。

**同じコマンドブロックをそのままアップデートにも使えます。** 手順はすべて冪等で、`cp` / `Copy-Item` は `~/.vscode-themes/` のテーマ JSON とバージョン入りスクリプトを上書きし、シェルプロファイルへの追記ステップは重複を防ぐガード付きなので再実行しても同じ `source` 行が二重に追加されません。新しいリポジトリを pull した後の更新（新テーマ・修正・[VERSION](VERSION) のバンプなど）は、このブロック全体を再実行するだけで済みます。別途のアップデート手順は不要です。

以下のコマンドは **リポジトリのルート** で実行してください。`VERSION`・`vscode-theme.sh` / `vscode-theme.ps1`・`.vscode-themes/` がすべてカレントディレクトリに揃っている必要があります。

### macOS / Linux（bash / zsh）

```bash
# 1. テーマディレクトリを作成
mkdir -p ~/.vscode-themes

# 2. 同梱されているテーマ JSON をコピー
cp .vscode-themes/*.json ~/.vscode-themes/

# 3. 現在のバージョンを vscode-theme.sh に焼き込み、インストール先にコピー。
#    その後、リポジトリ側のコピーを __VERSION__ プレースホルダに戻して
#    作業ツリーをクリーンな状態に保つ。
VERSION=$(cat VERSION)
sed -i.bak "s/__VERSION__/${VERSION}/" vscode-theme.sh
cp vscode-theme.sh ~/.vscode-themes/vscode-theme.sh
mv vscode-theme.sh.bak vscode-theme.sh   # リポジトリ側のプレースホルダを復元

# 4. シェルプロファイル（~/.zshrc または ~/.bashrc）へ追記。
#    冪等：同じ行が既にある場合は追記しないので、アップデートでの再実行も安全。
LINE='source ~/.vscode-themes/vscode-theme.sh'
grep -qF "$LINE" ~/.zshrc 2>/dev/null || echo "$LINE" >> ~/.zshrc

# 5. シェルを再読み込み
source ~/.zshrc
```

### Windows（PowerShell）

```powershell
# 1. テーマディレクトリを作成
New-Item -ItemType Directory -Force "$HOME\.vscode-themes"

# 2. 同梱されているテーマ JSON をコピー
Copy-Item .vscode-themes\*.json "$HOME\.vscode-themes\"

# 3. 現在のバージョンを vscode-theme.ps1 に焼き込み、インストール先にコピー。
#    その後、リポジトリ側のコピーを __VERSION__ プレースホルダに戻して
#    作業ツリーをクリーンな状態に保つ。
$version  = (Get-Content VERSION -Raw).Trim()
$original = Get-Content vscode-theme.ps1 -Raw
($original -replace '__VERSION__', $version) | Set-Content vscode-theme.ps1 -NoNewline
Copy-Item vscode-theme.ps1 "$HOME\.vscode-themes\vscode-theme.ps1"
Set-Content vscode-theme.ps1 -Value $original -NoNewline   # プレースホルダを復元

# 4. インストール先のスクリプトの実行ブロックを解除（インターネット経由で取得した場合に必要）
Unblock-File "$HOME\.vscode-themes\vscode-theme.ps1"

# 5. PowerShell プロファイルへ追記。
#    冪等：同じ行が既にある場合は追記しないので、アップデートでの再実行も安全。
$line = ". `"$HOME\.vscode-themes\vscode-theme.ps1`""
New-Item -ItemType Directory -Force (Split-Path $PROFILE) | Out-Null
New-Item -ItemType File -Force $PROFILE | Out-Null
if (-not ((Get-Content $PROFILE -ErrorAction SilentlyContinue) -contains $line)) {
    Add-Content $PROFILE $line
}

# 6. プロファイルを再読み込み
. $PROFILE
```

---

## 使い方

サブコマンドは bash / PowerShell どちらでも同じです。グローバルスコープを指定するフラグの書式だけシェルごとのパラメータ慣習に合わせて異なります。

| 操作                                            | bash / zsh                                                                          | PowerShell                                                                          |
| ----------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 利用可能なテーマを一覧表示                      | `vscode-theme list`                                                                 | `vscode-theme list`                                                                 |
| 現在の状態を表示（グローバル + ワークスペース） | `vscode-theme status`                                                               | `vscode-theme status`                                                               |
| 対話的にテーマを選択（ワークスペース）          | `vscode-theme set`                                                                  | `vscode-theme set`                                                                  |
| 対話的にテーマを選択（グローバル）              | `vscode-theme set --global`<br>`vscode-theme set -g`                                | `vscode-theme set -Global`<br>`vscode-theme set -g`                                 |
| 現在のワークスペースにテーマを適用              | `vscode-theme set navy-orange`                                                      | `vscode-theme set navy-orange`                                                      |
| テーマをグローバルに適用                        | `vscode-theme set navy-orange --global`<br>`vscode-theme set navy-orange -g`        | `vscode-theme set navy-orange -Global`<br>`vscode-theme set navy-orange -g`         |
| ワークスペースのテーマをリセット                | `vscode-theme reset`                                                                | `vscode-theme reset`                                                                |
| グローバルのテーマをリセット                    | `vscode-theme reset --global`<br>`vscode-theme reset -g`                            | `vscode-theme reset -Global`<br>`vscode-theme reset -g`                             |
| バージョンを表示                                | `vscode-theme version`<br>`vscode-theme --version`<br>`vscode-theme -v`             | `vscode-theme version`<br>`vscode-theme --version`<br>`vscode-theme -v`             |
| ヘルプを表示                                    | `vscode-theme help`<br>`vscode-theme --help`<br>`vscode-theme -h`<br>`vscode-theme` | `vscode-theme help`<br>`vscode-theme --help`<br>`vscode-theme -h`<br>`vscode-theme` |

**対話型ピッカー。** テーマ名を付けずに `vscode-theme set` を実行すると、ターミナル内でピッカーが開きます。カーソルを移動するたびに VSCode 側へそのテーマがリアルタイムで適用されるので、見た目を確認しながら選べます。

| キー                      | 動作                                                                  |
| ------------------------- | --------------------------------------------------------------------- |
| `↑` / `↓`（または `k` / `j`） | ハイライトを移動（選択中のテーマが即座に適用される）                  |
| `Enter`                   | ハイライト中のテーマで確定                                            |
| `Esc` または `q`          | キャンセルし、`settings.json` をピッカー起動前の状態へ戻す            |
| `Ctrl+C`                  | キャンセルと同じ扱い                                                  |

キャンセル時はファイルをバイト単位で元に戻します。もともと `settings.json` が無かった場合は削除し、存在していた場合は `__vscode_theme_backup` などを含むすべての中身をそのまま復元します。

**グローバルフラグについての注意。** PowerShell ではスイッチにシングルダッシュ＋キャメルケース（`-Global`）を使うのがネイティブの慣習で、`--global` は PowerShell の文法としては有効ではありません。bash スクリプトは `-g` と `--global` を、PowerShell スクリプトは `-g` と `-Global`（大文字小文字を区別しないので `-global` でも可）を受け付けます。短縮形 `-g` は両シェルで共通です。

テーマを適用したら、VSCode のウィンドウを再読み込みしてください：  
`Ctrl+Shift+P`（Windows / Linux）または `Cmd+Shift+P`（macOS）→ **Reload Window**

---

## 仕組み

`vscode-theme set <name>` を実行すると、ツールは以下を行います：

1. `~/.vscode-themes/<name>.json` からテーマ JSON を読み込む
2. 対象の `settings.json` を開く（なければ作成する）
3. `workbench.colorCustomizations` が既に存在し、かつ **このツール由来ではない** 場合、同じファイル内の `__vscode_theme_backup` として退避する
4. 新しい色を書き込み、`__vscode_theme_managed` にテーマ名を刻印する

`vscode-theme reset` を実行すると：

1. `__vscode_theme_backup` があれば → `workbench.colorCustomizations` に書き戻す
2. バックアップが無ければ → `workbench.colorCustomizations` ごと削除する
3. 削除した結果ワークスペースの `settings.json` が空になったら、ファイル自体も削除する
4. この間、`settings.json` 内の他の設定には一切手を加えない

```
settings.json（テーマ適用中）
├── workbench.colorCustomizations   ← テーマの色
├── __vscode_theme_managed          ← "navy-orange"
├── __vscode_theme_backup           ← 元々の色（既存のものがあった場合）
└── ... その他の設定 ...            ← 一切変更しない
```

bash 版は JSON のマージに Python（`python3` または `python`）を使うので、どちらかが `PATH` に通っている必要があります。PowerShell 版は組み込みの `ConvertFrom-Json` / `ConvertTo-Json` を使うため、追加の依存はありません。

---

## ファイル構成

| ファイル                                                                   | 説明                                                            |
| -------------------------------------------------------------------------- | --------------------------------------------------------------- |
| [VERSION](VERSION)                                                         | ツールのバージョンの唯一の情報源                                |
| [vscode-theme.sh](vscode-theme.sh)                                         | macOS / Linux（bash / zsh）用のシェル関数。`__VERSION__` を保持 |
| [vscode-theme.ps1](vscode-theme.ps1)                                       | Windows 用の PowerShell 関数。`__VERSION__` を保持              |
| [.vscode-themes/navy-orange.json](.vscode-themes/navy-orange.json)         | テーマ A — Navy + orange                                        |
| [.vscode-themes/squidink-yellow.json](.vscode-themes/squidink-yellow.json) | テーマ B — Squid ink + yellow                                   |
| [.vscode-themes/bedrock-teal.json](.vscode-themes/bedrock-teal.json)       | テーマ C — Bedrock teal                                         |
| [.vscode-themes/dark-ember.json](.vscode-themes/dark-ember.json)           | テーマ D — Dark + ember red                                     |
| [.vscode-themes/forest-green.json](.vscode-themes/forest-green.json)       | テーマ E — Forest green                                         |
| [.vscode-themes/royal-purple.json](.vscode-themes/royal-purple.json)       | テーマ F — Royal purple                                         |
| [.vscode-themes/ocean-blue.json](.vscode-themes/ocean-blue.json)           | テーマ G — Ocean blue                                           |
| [.vscode-themes/rose-magenta.json](.vscode-themes/rose-magenta.json)       | テーマ H — Rose magenta                                         |
| [.vscode-themes/paper-light.json](.vscode-themes/paper-light.json)         | テーマ I — Paper light                                          |
| [.vscode-themes/arctic-light.json](.vscode-themes/arctic-light.json)       | テーマ J — Arctic light                                         |
| [.vscode-themes/frappe-teal.json](.vscode-themes/frappe-teal.json)         | テーマ K — Frappé teal（Catppuccin インスパイアのダーク）       |
| [.vscode-themes/dawn-teal.json](.vscode-themes/dawn-teal.json)             | テーマ L — Dawn teal（Rosé Pine Dawn インスパイアのライト）     |
| [.vscode-themes/leather-orange.json](.vscode-themes/leather-orange.json)   | テーマ M — レザーオレンジ                                       |
| [.vscode-themes/cocoa-gold.json](.vscode-themes/cocoa-gold.json)           | テーマ N — ココアゴールド                                       |
| [.vscode-themes/espresso-green.json](.vscode-themes/espresso-green.json)   | テーマ O — エスプレッソグリーン（ライト）                       |
| [.vscode-themes/mountain-sunset.json](.vscode-themes/mountain-sunset.json) | テーマ P — マウンテンサンセット                                 |
| [.vscode-themes/leather-orange-light.json](.vscode-themes/leather-orange-light.json) | テーマ Q — レザーオレンジ（ライト）                     |
| [.vscode-themes/cocoa-gold-light.json](.vscode-themes/cocoa-gold-light.json) | テーマ R — ココアゴールド（ライト）                             |
| [.vscode-themes/espresso-green-dark.json](.vscode-themes/espresso-green-dark.json) | テーマ S — エスプレッソグリーン（ダーク）                 |
| [.vscode-themes/cobalt-crimson.json](.vscode-themes/cobalt-crimson.json) | テーマ T — コバルト + クリムゾン                                |
| [.vscode-themes/canary-red.json](.vscode-themes/canary-red.json)         | テーマ U — カナリー + レッド（ライト）                          |
| [.vscode-themes/ember-gold.json](.vscode-themes/ember-gold.json)         | テーマ V — エンバーゴールド                                     |
| [.vscode-themes/alpine-sunset.json](.vscode-themes/alpine-sunset.json)   | テーマ W — アルパインサンセット                                 |
| [.vscode-themes/sage-paper.json](.vscode-themes/sage-paper.json)         | テーマ X — セージペーパー（ライト、目に優しい）                 |
| [.vscode-themes/sage-paper-dark.json](.vscode-themes/sage-paper-dark.json) | テーマ Y — セージペーパー ダーク（ダーク、目に優しい）         |
| [.vscode-themes/prism-spark.json](.vscode-themes/prism-spark.json)       | テーマ Z — プリズムスパーク（4 色グラデーション、ダーク）        |
| [.vscode-themes/prism-vivid.json](.vscode-themes/prism-vivid.json)       | テーマ AA — プリズムビビッド（6 色を UI 全面分配、ダーク）       |

---

## バージョン

このツールのバージョンは、リポジトリのルートにある単一のファイル [VERSION](VERSION) に記載されています。バージョン番号が書かれる場所は **このファイルだけ** です。

### バージョンの伝わり方

git 上の両方のシェルスクリプトは、ハードコードされた文字列ではなく `__VERSION__` というリテラルのプレースホルダを持っています：

```sh
# vscode-theme.sh
VSCODE_THEME_VERSION="__VERSION__"
```

```powershell
# vscode-theme.ps1
$script:VT_VERSION = '__VERSION__'
```

[インストール](#インストール) の手順は、`VERSION` を読み取り、リポジトリ側のスクリプトでプレースホルダを置換し、バージョン入りのスクリプトを `~/.vscode-themes/` にコピーしたあと、リポジトリ側のコピーを `__VERSION__` に **戻します**。結果として：

- インストール先のコピー（`~/.vscode-themes/vscode-theme.{sh,ps1}`）には実際のバージョンが焼き込まれているので、エンドユーザーが `vscode-theme version` を実行するとバージョンが表示されます。
- リポジトリの作業ツリーはクリーンなまま。インストール後の `git status` には差分が出ません。
- バージョンを上げたいときに編集する場所は [VERSION](VERSION) の一箇所だけ。あとはインストール手順を再実行すれば自動で反映されます。コードの書き換えは不要で、スクリプトと README の値がずれることもありません。
