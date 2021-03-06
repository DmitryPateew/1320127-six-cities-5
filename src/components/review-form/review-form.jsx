import React, {createRef, PureComponent} from "react";
import {sendComment} from "../../store/api-actions";
import {connect} from "react-redux";
import {ratingAndCommentValidation} from "../../main-logic";
import {reviewAdd} from "../../store/action";
import PropTypes from "prop-types";
import {offerProp} from "../../prop-types";


class ReviewForm extends PureComponent {
  constructor(props) {
    super(props);
    this.revievw = {
      comment: ``,
      rating: ``,
    };

    this.commentnRef = createRef();
    this.ratingRef = createRef();
    this.ratingRef1 = createRef();
    this.ratingRef2 = createRef();
    this.ratingRef3 = createRef();
    this.ratingRef4 = createRef();


    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleStarChange = this.handleStarChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.sendComment(this.props.id, {comment: this.revievw.comment, rating: this.revievw.rating});
    this.props.reviewAdd(null, null);
    this.revievw = {comment: null, rating: null};
    this.commentnRef.current.value = ``;
    this.props.reviewAdd(null, null);
    this.ratingRef.current.checked = false;
    this.ratingRef1.current.checked = false;
    this.ratingRef2.current.checked = false;
    this.ratingRef3.current.checked = false;
    this.ratingRef4.current.checked = false;
  }

  handleFieldChange(evt) {
    const {value} = evt.target;
    this.revievw.comment = value;
    this.props.reviewAdd(value, this.revievw.rating);

  }

  handleStarChange(evt) {
    const {value} = evt.target;
    this.revievw.rating = value;
    this.props.reviewAdd(this.revievw.comment, value);
    evt.target.value = ``;
  }

  render() {
    const {review} = this.props;
    return (
      <form onSubmit={this.handleSubmit} className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input ref={this.ratingRef} onChange={this.handleStarChange} className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input ref={this.ratingRef1} onChange={this.handleStarChange} className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input ref={this.ratingRef2} onChange={this.handleStarChange} className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"/>
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input ref={this.ratingRef3} onChange={this.handleStarChange} className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"/>
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input ref={this.ratingRef4} onChange={this.handleStarChange} className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"/>
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </div>
        <textarea ref={this.commentnRef} onChange={this.handleFieldChange} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
            stay
            with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={ratingAndCommentValidation(review.rating, review.comment)}>Submit
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({REVIEW}) => ({
  review: REVIEW.review,
});

const mapDispatchToProps = (dispatch) => ({
  sendComment(id, comment) {
    dispatch(sendComment(id, comment));
  },
  reviewAdd(comment, rating) {
    dispatch(reviewAdd(comment, rating));
  },
});

ReviewForm.propTypes = {
  review: PropTypes.shape({
    rating: PropTypes.string,
    comment: PropTypes.string,
  }),
  reviewAdd: PropTypes.func.isRequired,
  sendComment: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  history: PropTypes.any,
  changeOverId: PropTypes.func,
  offer: offerProp
};

export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
