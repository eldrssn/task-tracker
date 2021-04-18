// ДАННЫЙ ДЛЯ КАРТОЧЕК
const data = [
  [{
    listTitle: 'Backlog',
  },
  {
    title: 'Twilio integration',
    description: 'Create new note via SMS. Support text, audio, links, and media.',
    theme: '',
    isImortant: false,
  },
  {
    title: 'Markdown support',
    description: 'Markdown shorthand converts to formatting',
    theme: 'Formatting',
    isImortant: false,
  }],

  [{
    listTitle: 'To do',
  },
  {
    title: 'Tablet view',
    description: '',
    theme: '',
    isImortant: true,
  },
  {
    title: 'Audio recording in note',
    description: 'Show audio in a note and playback UI',
    theme: 'Note interface',
    isImortant: false,
  },
  {
    title: 'Bookmark in note',
    description: 'Show rich link UI in a note, and feature to render website screenshot.',
    theme: 'Note interface',
    isImortant: false,
  },
  {
    title: 'Image viewer',
    description: 'Opens when clicking on the thumbnail in the list or on the image in the note',
    theme: '',
    isImortant: false,
  }],

  [{
    listTitle: 'In progress',
  },
  {
    title: 'Mobile view',
    description: 'Functions for both web responsive and native apps. Note: Android and iOS will need unique share icons.',
    theme: '',
    isImortant: true,
  },
  {
    title: 'Desktop view',
    description: 'PWA for website and native apps. Note: Windows and Mac will need unique share icons.',
    theme: '',
    isImortant: true,
  },
  {
    title: 'Formatting options',
    description: 'Mobile formatting bar expands and collapses when tapping the format icon.',
    theme: '',
    isImortant: false,
  },
  {
    title: 'Media in note',
    description: 'Image & video with player UI',
    theme: 'Note interface',
    isImortant: false,
  }],

  [{
    listTitle: 'Designed',
  },
  {
    title: 'Audio recording',
    description: 'Interface for when recording a new audio note',
    theme: 'New note',
    isImortant: false,
  },
  {
    title: 'Bookmarking',
    description: 'Interface for when creating a new link note.',
    theme: 'New note',
    isImortant: false,
  }]
];

export { data };