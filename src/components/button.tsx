import * as React from 'react';

export interface IButtonProps {
  readonly children: React.ReactNode;

  readonly onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  readonly disabled?: boolean;

  readonly type?: 'submit' | 'reset' | 'button';

  readonly className?: string;
}

export class Button extends React.Component<IButtonProps, {}> {
  public render() {
    const { disabled } = this.props;

    return (
      <button
        className={this.props.className}
        onClick={disabled ? preventDefault : this.onClick}
        type={this.props.type || 'button'}
      >
        {this.props.children}
      </button>
    );
  }

  private onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }

    if (this.props.type === undefined) {
      event.preventDefault();
    }
  };
}

const preventDefault = (e: Event | React.SyntheticEvent) => e.preventDefault();
