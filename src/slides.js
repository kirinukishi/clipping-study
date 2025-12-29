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
  }
];
];
