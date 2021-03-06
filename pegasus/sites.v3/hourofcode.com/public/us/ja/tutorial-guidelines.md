

# Hour of Codeと、Computer Science Education Weekのためのガイドライン指導書

**Hour Of Code 2014 チュートリアルの投稿締め切りは過ぎました。それでもまだ投稿することができますし、私たちも時間の許す限りレビューします。**

Code.org はさまざまな Hour of Code の活動を Code.org、Hour of Code と CSEdWeek のウェブサイトでホストします。現在のリストは次の場所にあります: [<%= codeorg_url() %>](http://<%= codeorg_url() %>/learn).

私たちは魅力的な選択を用意したいと思っていますが、一番の目的はコンピューター科学に馴染みのない、より多くの教員や学生の方々に経験をしてもらいたいという事です。 コーディングやコンピュータープログラミングやコンピューター科学の経験がない利用者に向けたあなたの活動を作るための手引きとしてこの文書を使ってください。

<a id="top"></a>

## 目次:

  * [チュートリアルを含めるかどうかが評価される方法](#inclusion)
  * [Hour of Code の活動を作るための一般的なガイドライン](#guidelines)
  * [提出方法 (期限は 2014/10/1)](#submit)
  * [あなたの活動を計画するための提案](#design)
  * [商標についてのガイドライン](#tm)
  * [トラッキング ピクセル](#pixel)
  * [あなたのチュートリアル、CSEdWeek、Hour of Codeの宣伝](#promote)
  * [障害を持つ学生のための注意](#disabilities)

<a id="inclusion"></a>

## チュートリアルを含めるかどうかが評価される方法

コンピューター科学の教育者の委員会が、幅広い教育者の調査結果を含めて、質と量の規準を基に、提出されたものをランク付けします。

**チュートリアルが高く評価される条件:**

  * 高品質
  * 自発的で、指示・説明を必要としない
  * 初心者向けである
  * 1 時間以内の活動として計画されている
  * 携帯電話やタブレットを含め、多くの OSやデバイスのプラットフォームで動作する
  * 複数の言語で動作する
  * すべての人口統計学的な集団（とくに過小評価されている集団）の学びを促進するものである
  * ピュアな HTML+CSS ウェブデザインに重点を置いていない - （私たちの目標はコンピューター科学であって、HTML のコーディングではありません）

**チュートリアルが低く評価される条件:**

  * 低品質
  * より高度な教育レベルである（初心者向けでない）
  * サポートされている OS やデバイスのプラットフォームが限られている - Web ベースのプラットフォームについては、次の全てをサポートするのを目指すべきです: IE9以上と、最新の Chrome、Firefox、Safari
  * 日本語でのみ動作する
  * 性差特有の傾向がある（例えばテーマが男子を主な対象としている）
  * 授業料を請求する学習プラットフォームへのアップセルとして機能するものである

**チュートリアルがリストに載らない条件:**

  * 高度に先生が関わり多くの準備が必要である（すなわち学生にとって自分からの活動でない）
  * （およそ）1 時間の活動として計画されていない
  * サインアップが必要である 
  * 支払いが必要である
  * インストールが必要である
  * HTML + CSS ウェブデザインのみに重点を置いている
  * 提出期限後に提出されたか、または情報が不完全である（下記参照）

最終的に、Hour of Code キャンペーンの目標は学生と先生によるコンピューター科学への参加を拡大させ、コンピューター科学がすべての人が利用可能で「あなたの思うより簡単です」と示す手助けとなることです。いろいろな点で、この目標をよりよく達成するためには、初めてのユーザーにとって最高品質の選択に重点を置きつつ、学生や先生に与える選択肢を少なくそして簡単にすることです。

また注意すべき点は、2013 年の CSEdWeek が先生や学生からの反応で評価すれば素晴らしい成功だったことです ― 12 月 9～23 日に 2000 万人の参加者があり、97% が楽しいと言い、キャンペーンを繰り返しやりたいと思っています!!

この結果、リストにすでに載っているものは確かに「十分に良い」ので、Hour of Code のリストにチュートリアルを追加する強い理由は、選択肢を広げるためではなく学生にとっての品質（や鮮度）を高めるため、または 2014 年のキャンペーンがグローバルなことから、非英語の話者の選択肢を展開するためです。

[**トップに戻る**](#top)

<a id="guidelines"></a>

## Hour of Code の活動を作るための一般的なガイドライン

  * **主題:**コンピュータ科学やプログラミングの入門 (HTML ではありません)。
  * **目標:** 初心者にプログラミングを初めて味わってもらう
  * **風格:** 
      * コンピューター科学は天才のためだけのものではありません。年齢、性別、人種は関係ありません。誰でも学ぶことができます！
      * コンピューター科学は幅広い分野や関心事とつながっています。誰もが学ぶべきです！
      * 学生が、友達とまたはオンラインで共有できるものを作るのを励まします。
  * **活動の種類:** 
      * **最善:** ウェブベースで、スマートフォン対応か、コンピュータを使わずにコンピューター科学の概念を教える、電力のいらない形の活動(<http://csunplugged.com/> をご覧ください). 
      * **悪くないが、好ましくはない:** アプリをインストールする、またはデスクトップアプリ、ゲーム機の体験。
  * **形式:** 必要に応じて先生の手助けのある、自分から行うチュートリアルやレッスン。 時間無制限の長い課題とは対照的に、学生への指示があるべきです。 理想的には、指示やチュートリアルがプログラミングのプラットフォームに統合されて、チュートリアルとプログラミングの間でタブやウィンドウを切り替えずに済む形です。

[**トップに戻る**](#top)

<a id="submit"></a>

## 提出方法 (期限は 2014/10/1)

[Hour of Code 活動提出ページ](https://docs.google.com/a/code.org/forms/d/16FZ2a24YsZzhoCiThzUf1DI7nkuYG5sJURMEPd3wDvU/viewform)にアクセスして、手順に従ってあなたのチュートリアルを提出してください。

**必要となるもの:**

  * あなたの名前、ロゴ（jpg、png など）
  * HoC 活動のスクリーンショットや市場向け画像の URL。 画像やスクリーンショットは正確に 446×335 の解像度であるべきです。 適切な画像が提供されない場合、我々自身であなたのチュートリアルのスクリーンショットをとるか、またはリストに載せないことがあります。
  * ロゴの URL リンク
  * 活動の名前
  * 活動への URL リンク
  * 先生のメモへの URL リンク（必要ならば。詳細は下記参照）
  * 活動の説明（デスクトップ表示とモバイル表示の両方） 
      * **デスクトップ表示での最大文字数:** 384文字
      * **モバイル表示での最大文字数:** 74文字
      * 説明には、主に学生が主体なのか、または先生の手助けがあるのかを含めてください。 さらに、Hour of Code 活動がコモン・コアや次世代科学スタンダードに取り組んでいるかどうかに興味のある学校もあります。 もし活動が具体的な標準に取り組んでいるのであれば、その情報を含めることを検討してください。
  * テストした/互換性のあるプラットフォームのリスト: 
      * **ウェブベース:** 
          * OS - Mac・Winとバージョン
          * ブラウザ - IE8、IE9、IE10、Firefox、Chrome、Safari
          * iOS モバイル Safari（携帯対応）
          * Android Chrome（携帯対応）
      * **非ウェブベース:** ネイティブコードのプラットフォームを記載してください（Mac、Win、iOS、Android、xBox、ほか）　
      * 電力のいらない形
  * サポートされている言語の一覧と適切な形式: 
      * チュートリアルはサポートする言語を 2 文字の言語コードを使って記載すべきです。例えば、ja - 日本語、en - 英語
      * もしさらに特異性が必要であれば、ダッシュを使います。例えば、fr-be - フランス語（ベルギー）または fr-ca - フランス語（カナダ）
      * ***注意: 言語の検出はチュートリアル提供者の仕事です。我々は全てのユーザーを提供された単一の URL にリダイレクトします。*** 
  * オンラインのチュートリアルを提出する場合、それが [COPPA 準拠](http://en.wikipedia.org/wiki/Children's_Online_Privacy_Protection_Act)かどうかをお知らせください。
  * 目的利用者の推奨学年。学年に適したコンピューター科学の概念については [コンピューター科学教育者協会の K-12 標準](http://csta.acm.org/Curriculum/sub/K12Standards.html) を参照してください。学年レベルの例として挙げられるものは次の通りです: 
      * 小学校: 幼稚園～小2、または小3～5
      * 中等学校: 小6～中2
      * ハイスクール: 中3～高3
      * 全年齢
  * 学年レベルの中には、推奨されるコンピューター科学の知識（初心者、中級、上級）も含めてください。 Hour of Code のウェブサイトは初心者向けの活動を最も目立つように強調表示します。 中級・上級の Hour of Code 活動を用意する場合は、必要な予備知識を活動の説明に含めてください。
  * 技術的要件: 
      * 参加をより正確に追跡するため、各サードパーティーのチュートリアルパートナーに、Hour of Code チュートリアルの最初と最後のページに 1 ピクセルのトラッキング画像を入れていただくようお願いしています。 最初のページには最初の画像を、最後のページには最後の画像を配置してください。 中間のページには配置しないでください）。 詳細については下記のトラッキングピクセルの節を参照してください。 
      * あなたの活動を終えた時には、ユーザーは <http://code.org/api/hour/finish> にリダイレクトされるべきです。そこでユーザーは次のことができます: 
          * Hour of Code を完了したことをソーシャルメディアで共有する
          * Hour of Code を完了した証明書を受け取る
          * Hour of Code 活動への参加率が最も高い国/都市についてのリーダーボードを見る
          * あなたの活動に 1 時間費やして完了できなかったユーザーに対しては、あなたの活動に「私は Hour of Code を終えました」という、<http://code.org/api/hour/finish> へ戻るボタンを含めてください。 
  * ***（省略可能）*** 私たちは12月8日午前12:01から12月14日午後11:59までの 1 週間、次に挙げる活動測定基準のレポートを求めるオンラインのアンケート/フォームのリンクで追跡調査をします） 
      * オンラインの活動（特にスマートフォン・タブレットのアプリ）について: 
          * ユーザー数
          * タスクを完了した人の数
          * タスクの平均時間
          * 全ユーザーによって書かれたコードの合計行数
          * それ以上の学習へ続けた人の数（タスクを終えて続けてあなたのサイトの追加のタスクへ移ったユーザーとして測定します）
      * オフラインの活動について 
          * 活動の紙バージョンのダウンロード数（該当する場合）

[**トップに戻る**](#top)

<a id="design"></a>

## あなたの活動を計画するための提案

**CSEdWeek のロゴをチュートリアルに含めましょう。**CSEdWeek のロゴ（[小](https://www.dropbox.com/s/ojlltuegr7ruvx1/csedweek-logo-final-small.jpg)または[大](https://www.dropbox.com/s/yolheibpxapzpp1/csedweek-logo-final-big.png)）をあなたのチュートリアルに含めることができますが、必須ではありません。 また、“In Partnership with Code.org”（Code.org と提携しています）のロゴを使用するには私たちにご連絡いただき許可を要求してください。 ***このロゴは Code.org によって書面で明確な許可が付与された場合に限り使用することができます。***Hour of Code のロゴは、私たちは最終的に作ることになるかもしれませんが、現時点ではまだありません。 いかなる状況下でも Code.org のロゴと名前は使用することは出来ません。 どちらも商標登録されており、サードパーティーのブランド名と混合することはできません。

**平均的な学生が不自由なく 1 時間以内に終えられるようにしてください。**速くレッスンを進める学生には時間無制限の活動を最後に追加することを検討してください。 ほとんどの子供たちはコンピューター科学やコーディングには全くの初心者であることを忘れないでください。

**先生へのメモを含めましょう。**ほとんどの活動は学生主導であるべきですが、もし先生の手助けや監督をする活動であれば、先生向けの明確で簡潔な指示を、活動とともに提出する別個の URL に先生メモの形式で含めましょう。 初心者なのは学生だけではありません。一部の先生も初心者です。 次のような情報を含めてください:

  * 私たちのチュートリアルはこのようなプラットフォームやブラウザで最もよく動作します
  * 動作環境はスマートフォンか？　タブレットか？
  * ペアプログラミングを推奨しているかどうか 
  * 教室で使う場合に考慮すべき点？　例えば、動画がある場合には、動画をスクリーンに投影して教室全体でいっしょに見ることができるようにするよう先生にアドバイスしましょう。

**活動の最後にフィードバックを組み込みましょう。**（例：「レベルを 10 個完了して、ループについて学びました！　よくできました！」）

**ソーシャルメディアを組み込みましょう。**完了した時に学生に（適切な）ソーシャルメディアへ投稿することを奨励しましょう。例えば、「Hour of Code を________で完了しました。あなたは？ #HourOfCode」や「#CSEdWeek の1つとして #HourofCode を完了しました。 あなたは？ @Scratch」ハッシュタグ **#HourOfCode** を使ってください（H, O, C は大文字）

**英語以外の言語であなたの活動を作成しましょう。**私たちは、今年はこのキャンペーンに国際的に重心を置いており、非英語圏の参加者にたくさんの活動を提供したいと思っています。

**社会的に重要な文脈に活動を説明したり結びつけたりしましょう。**コンピュータープログラミングは、それが世界をどのようにしてより良く変えられるかを学生がわかったときに力を発揮します！

**サインアップしなくてもチュートリアルを試せるようにしましょう。**サインアップや支払いが必要なチュートリアルはリストに掲載しません

**チュートリアルが[ペアプログラミング パラダイム](http://www.ncwit.org/resources/pair-programming-box-power-collaborative-learning)で使えるようにしましょう。.**

学校という環境におけるペアプログラミングの 3 つのルール:

  * ドライバーは、マウスとキーボードを操作します。
  * ナビゲーターは提案をし、エラーを指摘し、質問をします。 
  * 学生は 1 回のセッションで 2 回以上役割を交代するべきです。

ペアプログラミングの利点:

  * 学生が先生に頼るのではなくお互いを助けあうことができる
  * コーディングは一人だけでの活動ではなく、人とのかかわり合いを必要とするものであることを示す
  * 全ての教室や実習室に 1:1 の体験に十分な数のコンピューターがあるわけではない

[**トップに戻る**](#top)

<a id="tm"></a>

## 商標についてのガイドライン

約 4000 万人の学生が Hour of Code を試し、参加した先生の 97% に私たちにイベントを毎年繰り返して欲しいと頼まれたなかで、私たちは Hour of Code を正確に混乱なく毎年繰り返すことのできる運動として準備するようにする措置を講じています。

混乱を防ぐために商標「Hour of Code」を保護するというのもその一つです。 チュートリアルパートナーの多くがウェブサイトに「Hour of Code」を使用してきました。 私たちはこの使い方を引き止めるわけではありませんが、いくつかの制限を満たすようにしたいと思っています:

  1. いかなる「Hour of Code」への言及も、それがあなたの独自のブランド名だと示唆する形ではなく、Hour of Code を草の根運動として参照する形で使われるべきです。 良い例:「ACMECorp.com で Hour of Code に参加する」。 悪い例:「ACME Corp の Hour of Code を試す」
  2. ウェブサイトとアプリの説明の両方で、「Hour of Code」について言及するもっとも目立った場所に上付き文字の「TM」を使ってください。
  3. ページに（またはフッターに）、CSEdWeek と Code.org へのリンクを含めて次の言葉を含めてください:
    
    ***「『Hour of Code』はコンピューター科学教育週間[csedweek.org]と Code.org [code.org] による、数百万人もの学生にコンピューター科学とコンピュータープログラミングを経験してもらうための全国的な取り組みです。」***

  4. アプリ名に「Hour of Code」を使用しないでください。

[**トップに戻る**](#top)

<a id="pixel"></a>

## トラッキング ピクセル

参加をより正確に追跡するため、各サードパーティーのチュートリアルパートナーに、Hour of Code チュートリアルの最初と最後のページに 1 ピクセルのトラッキング画像を入れていただくようお願いしています（最初のページには最初の画像を、最後のページには最後の画像を入れてください。 そして中間のページには入れないでください）。

これにより、あなたが直接勧誘して Hour of Code を行うためにあなたのウェブサイトを訪れたユーザーや、先生がホワイト ボード上に直接あなたの URL を入力したときに訪れたユーザーを数えることができます。 このことであなたのチュートリアルの参加者数がより正確になり、ユーザーを惹きつけやすくなります。 もし最後のページにピクセルを組み込めば、チュートリアルの完了率を測定できるようにもなります。

もしあなたのチュートリアルが承認されて最終的なチュートリアルのページに含められたならば、Code.org はチュートリアルに組み込むためのユニークなトラッキングピクセルをあなたに提供します。以下の例を参照してください。

***注意: これはインストール可能なアプリ（iOS/Android アプリ、またはデスクトップインストールアプリ）にとっては重要ではありません***

**AppInventor 用のトラッキングピクセルの例:**

IMG SRC="http://code.org/api/hour/begin_appinventor.png/"

IMG SRC="http://code.org/api/hour/finish_appinventor.png/"

[**トップに戻る**](#top)

<a id="promote"></a>

## あなたのチュートリアル、CSEdWeek、Hour of Codeの宣伝

私たちはすべての方に、ご自身の 1 時間のチュートリアルをあなたのユーザーに宣伝するようお願いしています。 あなたの Hour of Code のページに案内してください。 ユーザーはチュートリアルについてのあなたからのメールにはおそらく反応してくれるでしょう。 コンピューター科学教育週間の間、国際的な Hour of Code キャンペーンを理由にユーザーに他の人を招待するよう奨励し、参加してもらいましょう。私たちの総参加者が 1 億人に達する手助けをお願いします。

  * あなたのウェブサイトで Hour of Code と CSEdWeek を取り上げましょう。  
    例: <http://www.tynker.com/hour-of-code>
  * ハッシュタグ **#HourOfCode**（H, O, C は大文字）を使って、ソーシャルメディアや従来のメディア、メーリングリストなどで Hour of code を宣伝しましょう
  * 地元のイベントを開催したり、あなたの従業員に地元の学校や地域社会のグループでイベントを開催してもらうようお願いしてみましょう。
  * その他の情報については、リソースキットをご覧ください（近日公開）。

[**トップに戻る**](#top)

<a id="disabilities"></a>

## 障害を持つ学生のための特別な注意

視覚障害者向けに設計されたチュートリアルを作成する場合、スクリーン リーダーで見る人のためにそれを強調したいと思います。 そのようなチュートリアルはまだ受け取ったことがないので、そういった学生に向けた選択肢として含めたいと思います。

[**トップに戻る**](#top)