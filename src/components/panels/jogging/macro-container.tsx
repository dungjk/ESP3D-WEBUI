import { FunctionalComponent, h } from 'preact';
import { Star, Edit2, Cloud } from 'preact-feather';

const MacroContainer: FunctionalComponent = () => {
  return (
    <div id="macro_container" class="buttons">
      <a class="button is-link">
        <span class="tag is-white">
          <span class="icon">
            <Star />
          </span>
          <span class="icon">
            <Edit2 />
          </span>
        </span>
      </a>
      <a class="button is-info">
        <span class="tag is-white">
          <span class="icon">
            <Cloud />
          </span>
          <span class="icon">YY</span>
        </span>
      </a>
    </div>
  );
};

export default MacroContainer;
