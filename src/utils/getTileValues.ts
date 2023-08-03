import {
  ButtonTileValues,
  ImageTileValues,
  TextTileValues,
  TilesActionValues,
} from 'components/tiles/tiles.interfaces';

function getImageTileValues(tileData: TilesActionValues): ImageTileValues {
  if (!tileData) {
    return {
      title: '',
      source: '#',
    };
  }

  return {
    title: 'title' in tileData ? tileData.title ?? '' : '',
    source: 'source' in tileData ? tileData.source : '#',
  };
}

function getTextTileValues(tileData: TilesActionValues): TextTileValues {
  if (!tileData) {
    return {};
  }

  return {
    title: 'title' in tileData ? tileData.title : '',
    text: 'text' in tileData ? tileData.text : '',
    color: 'color' in tileData ? tileData.color : 'dark',
  };
}

function getButtonTileValues(tileData: TilesActionValues): ButtonTileValues | void {
  if (!tileData || !('action' in tileData)) {
    return;
  }

  return {
    text: 'text' in tileData ? tileData.text ?? 'button' : 'button',
    action: tileData.action,
  };
}

export { getImageTileValues, getTextTileValues, getButtonTileValues };
