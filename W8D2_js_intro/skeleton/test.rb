class Array
  def my_inject(prc, accumulator = nil)
    arr = self.dup
    prc ||= Proc.new { |ele| ele }

    if accumulator.nil?
      accumulator = arr.shift
    end

    arr.each do |ele|
      accumulator = accumulator + prc.call(ele)
    end

    return accumulator
  end
end

prc = Proc.new{ |ele| ele }
array = [1, 2, 3, 4, 5, 6, 7]

p array.my_inject(prc)

def recrange(start, end_num)
  return [end_num] if end_num == start
  recrange(start, end_num - 1) << end_num
end

p recrange(-50, 10)