const DevIcon = ({ className, ...props }) => {
  return (
    <div class="list-item">
      {className ? <i class={className}></i> : props.children}
    </div>
  );
};
export default DevIcon;
