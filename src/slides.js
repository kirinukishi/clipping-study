import { Scissors, Zap, MonitorPlay, Layers, AlertTriangle, MessageCircle, Star, Clock, FileText, UploadCloud } from 'lucide-react';

export const slides = [
  {
    id: 0,
    type: 'title',
    title: '切り抜き塾',
    subtitle: '現役切り抜き師直伝',
    icon: Scissors,
  },
  {
    id: 1,
    type: 'content',
    title: 'こんなお悩みありませんか？',
    content: [
      'Facebookライブが頻繁に行われていて、見逃すことが多くなっていませんか？',
      'アーカイブで1時間の動画を見るの大変ですよね',
      'でも、どんなこと話してたのか知りたい...',
      '多くの方がこんな悩みを抱えています'
    ],
    icon: Clock,
  },
  {
    id: 2,
    type: 'content',
    title: '切り抜き動画とは？',
    content: '長時間配信や動画から、\n見どころ（ハイライト）だけを\n抽出・編集したコンテンツ。\n\n\n「タイパ（タイムパフォーマンス）」を重視する\n現代の視聴者に最適化された\nフォーマットです。',
    icon: MonitorPlay,
  },
  {
    id: 3,
    type: 'content',
    title: '切り抜き動画のメリット',
    content: [
      '1分で内容を伝えられる',
      '長尺だと見なかった人たちに届けられる',
      'ボラスタ内での情報共有にも使える',
      '作れる人が少ないので認知されやすい'
    ],
    icon: Zap,
  },
  {
    id: 10,
    type: 'image-split',
    title: '動画のダウンロード方法',
    content: [
      'Facebookライブの URLをコピーする',
      '友達公開はダウンロードできない（公開範囲に注意）'
    ],
    image: '/assets/fb_live_capture.png',
    icon: Scissors,
  },
  {
    id: 11,
    type: 'image-split',
    title: '動画のダウンロード方法 (2)',
    content: [
      'SnapSave (https://snapsave.io/ja/home)',
      'URLを貼り付けて「ダウンロード」',
      '※広告が出たら「閉じる」を押す',
      'MP4: 720p (HD) を選択',
      'MP3: 320kbps を選択（少し待ち時間あり）'
    ],
    images: [
      '/assets/snapsave_input.png',
      '/assets/snapsave_ad.png',
      '/assets/snapsave_mp4.png',
      '/assets/snapsave_mp3.png'
    ],
    imageGridCols: 1,
    imageObjectFit: 'contain',
    icon: Scissors,
  },
  {
    id: 12,
    type: 'image-split',
    title: '文字起こしツールの使い方',
    content: [
      '切り抜き塾 (https://kirinuki-juku.com/)',
      'このサイトで会員登録した人だけがログイン可能',
      'ログインページで必要情報を入力',
      'ログイン後、マイページの「文字起こし部屋」へ移動'
    ],
    images: [
      '/assets/kirinuki_top.png',
      '/assets/kirinuki_login.png',
      '/assets/kirinuki_mypage.png'
    ],
    imageGridCols: 1,
    imageObjectFit: 'contain',
    icon: FileText,
  },
  {
    id: 13,
    type: 'image-split',
    title: '文字起こし手順',
    content: [
      '「音声ファイルを選択」をクリック',
      'さっきダウンロードした MP3ファイルを選ぶ',
      '「文字起こし開始」ボタンを押す',
      '完了するとテキストファイルがダウンロード可能に'
    ],
    image: '/assets/kirinuki_upload.png',
    icon: UploadCloud,
  },
  {
    id: 4,
    type: 'content',
    title: 'なぜ「切り抜き」が伸びるのか',
    content: [
      '短時間でオイシイところだけ見れる',
      'テロップ・効果音で情報密度が高い',
      'スマホで見やすい縦型（Shorts/TikTok）との相性が抜群',
      '元動画への誘導（Win-Win関係）'
    ],
    icon: Zap,
  },
  {
    id: 5,
    type: 'content',
    title: '使用ツール',
    content: [
      'PC: Adobe Premiere Pro (業界標準)',
      'Smartphone: CapCut (手軽に高品質)',
      'AI: Vrew (自動字幕), Opus Clip (自動抽出)',
      'Image: Photoshop / Canva (サムネイル)'
    ],
    icon: Scissors,
  },
  {
    id: 6,
    type: 'steps',
    title: '制作ワークフロー',
    steps: [
      { num: 1, text: '素材選定 (一番大事！面白い箇所を探す)' },
      { num: 2, text: '粗編集 (無駄な「間」を徹底カット)' },
      { num: 3, text: 'テロップ入れ (フルテロップが基本)' },
      { num: 4, text: '装飾・演出 (SE、画像、ズーム)' },
      { num: 5, text: 'サムネ作成 & 投稿' }
    ],
    icon: Layers,
  },
  {
    id: 7,
    type: 'content',
    title: '著作権とガイドライン',
    content: [
      '「黙認」と「許可」は違う',
      '配信者のガイドラインを必ず確認（ぶいすぽ、ホロライブ、にじさんじ等は明確な規約あり）',
      '収益化のルール（折半、登録制など）',
      '悪意のある編集はNG'
    ],
    icon: AlertTriangle,
  },
  {
    id: 8,
    type: 'quote',
    title: '重要なのは...',
    content: '"愛のある編集" が\n視聴者と配信者の心を掴む',
    author: '切り抜き職人の心得',
    icon: Star,
  },
  {
    id: 9,
    type: 'end',
    title: 'Thank You!',
    subtitle: '質疑応答 & 交流タイム',
    icon: MessageCircle,
  }
];
